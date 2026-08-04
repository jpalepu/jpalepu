// Renders a GitHub-style contribution heatmap whose shading is scaled by
// quartiles of your own active days, instead of GitHub's scale where one
// 179-commit outlier flattens every normal day to the palest green.

const CELL_SIZE = 11;
const CELL_GAP = 3;
const CELL_PITCH = CELL_SIZE + CELL_GAP;
const CORNER_RADIUS = 2;
const LABEL_GUTTER = 30; // room for the Mon/Wed/Fri weekday labels
const LABEL_HEADER = 20; // room for the month labels
const DAYS_PER_WEEK = 7;

const LIGHT_SHADES = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const DARK_SHADES = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAY_LABELS = { 1: 'Mon', 3: 'Wed', 5: 'Fri' };

async function fetchCalendarHtml(username) {
  // Public, unauthenticated endpoint. No token, no API quota, no secrets to rotate.
  const response = await fetch(`https://github.com/users/${username}/contributions`);
  if (!response.ok) throw new Error(`GitHub returned ${response.status} for user "${username}"`);
  return response.text();
}

function parseDays(html) {
  const cellPattern = /data-date="(\d{4}-\d{2}-\d{2})" id="(contribution-day-component-(\d+)-(\d+))"/g;
  const cellsById = new Map();
  for (const [, date, id, row, column] of html.matchAll(cellPattern)) {
    cellsById.set(id, { date, row: Number(row), column: Number(column), count: 0 });
  }

  // Counts only exist in the screen-reader tooltip, linked to the cell by `for`.
  const tooltipPattern = /for="(contribution-day-component-[^"]+)"[^>]*>([^<]*)</g;
  for (const [, id, text] of html.matchAll(tooltipPattern)) {
    const cell = cellsById.get(id);
    if (!cell) continue;
    const match = /^(\d+) contribution/.exec(text);
    cell.count = match ? Number(match[1]) : 0;
  }

  if (cellsById.size === 0) throw new Error('No contribution cells found, GitHub markup may have changed');
  return [...cellsById.values()];
}

// Quartiles of active days, so each shade covers roughly a quarter of them.
// Self-tuning: no thresholds to revisit when commit habits change.
function quartileThresholds(days) {
  const activeCounts = days.map((day) => day.count).filter((count) => count > 0).sort((a, b) => a - b);
  const quantile = (fraction) => activeCounts[Math.floor(activeCounts.length * fraction)];
  return [quantile(0.25), quantile(0.5), quantile(0.75)];
}

function levelFor(count, thresholds) {
  if (count === 0) return 0;
  return 1 + thresholds.filter((threshold) => count > threshold).length;
}

function monthLabels(days, columnCount) {
  const firstDayOfColumn = new Map();
  for (const day of days) {
    const existing = firstDayOfColumn.get(day.column);
    if (!existing || day.date < existing.date) firstDayOfColumn.set(day.column, day);
  }

  const labels = [];
  let previousMonth = null;
  for (const [column, day] of [...firstDayOfColumn].sort((a, b) => a[0] - b[0])) {
    const month = Number(day.date.slice(5, 7)) - 1;
    if (month !== previousMonth) labels.push({ column, name: MONTH_NAMES[month] });
    previousMonth = month;
  }
  // Trim both ends: the leftmost week is partial, and a label in the last
  // columns would overflow the right edge (it repeats the first month anyway).
  const LAST_LABELLABLE_COLUMN = columnCount - 3;
  return labels.filter((label) => label.column > 0 && label.column <= LAST_LABELLABLE_COLUMN);
}

function renderSvg(days, thresholds) {
  const columnCount = Math.max(...days.map((day) => day.column)) + 1;
  const width = LABEL_GUTTER + columnCount * CELL_PITCH;
  const height = LABEL_HEADER + DAYS_PER_WEEK * CELL_PITCH;

  const cells = days.map((day) => {
    const x = LABEL_GUTTER + day.column * CELL_PITCH;
    const y = LABEL_HEADER + day.row * CELL_PITCH;
    const label = `${day.count} on ${day.date}`;
    return `<rect x="${x}" y="${y}" width="${CELL_SIZE}" height="${CELL_SIZE}" rx="${CORNER_RADIUS}" class="l${levelFor(day.count, thresholds)}"><title>${label}</title></rect>`;
  });

  const months = monthLabels(days, columnCount).map(
    ({ column, name }) => `<text x="${LABEL_GUTTER + column * CELL_PITCH}" y="${LABEL_HEADER - 8}" class="cap">${name}</text>`
  );

  const weekdays = Object.entries(WEEKDAY_LABELS).map(
    ([row, name]) => `<text x="0" y="${LABEL_HEADER + row * CELL_PITCH + CELL_SIZE - 1}" class="cap">${name}</text>`
  );

  const shadeRules = (shades) => shades.map((color, level) => `.l${level}{fill:${color}}`).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Contribution heatmap">
<style>
.cap{font:9px -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;fill:#57606a}
${shadeRules(LIGHT_SHADES)}
@media (prefers-color-scheme:dark){.cap{fill:#8b949e}${shadeRules(DARK_SHADES)}}
</style>
${months.join('\n')}
${weekdays.join('\n')}
${cells.join('\n')}
</svg>
`;
}

async function main() {
  const [username, outputPath] = process.argv.slice(2);
  if (!username || !outputPath) throw new Error('usage: node heatmap.js <github-username> <output.svg>');

  const days = parseDays(await fetchCalendarHtml(username));
  const thresholds = quartileThresholds(days);
  require('fs').writeFileSync(outputPath, renderSvg(days, thresholds));

  const distribution = [0, 0, 0, 0, 0];
  for (const day of days) distribution[levelFor(day.count, thresholds)]++;
  console.log(`${outputPath}: ${days.length} days, thresholds ${thresholds.join('/')}, levels ${distribution.join('/')}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
