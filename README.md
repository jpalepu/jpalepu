<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1e3d,45:1e4b8f,100:38bdf8&height=190&section=header&text=Jithin%20Kumar%20Palepu&fontSize=44&fontColor=ffffff&fontAlignY=34&desc=AI%20in%20physical%20systems%20%C2%B7%20Robotics%20%C2%B7%20Control&descAlignY=54&descSize=17" alt="Jithin Kumar Palepu" width="100%"/>

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=21&pause=1200&color=38BDF8&center=true&vCenter=true&width=680&lines=AI+in+physical+systems;Robotics+%C2%B7+Control+%C2%B7+Embedded;Agent+harnesses+%C2%B7+Multi-agent+%C2%B7+RAG+at+scale;Founding+AI+%26+FD+Engineer;Robots+that+do+more+with+less" alt="AI in physical systems" /></a>

<br/>

<a href="https://ahsk.app"><img src="https://img.shields.io/badge/ahsk.app-0b1e3d?style=for-the-badge&logo=apple&logoColor=ffffff" alt="ahsk"/></a>
<a href="https://github.com/jpalepu/herm_ws"><img src="https://img.shields.io/badge/herm_robot-0b1e3d?style=for-the-badge&logo=probot&logoColor=38bdf8" alt="herm robot"/></a>
<a href="mailto:jpalepu@icloud.com"><img src="https://img.shields.io/badge/Email-0b1e3d?style=for-the-badge&logo=icloud&logoColor=38bdf8" alt="Email"/></a>

</div>

---

I work on **AI in physical systems** — the point where a model stops producing text and starts moving something.

That means control and robotics as much as it means machine learning. A policy is only as good as the loop it closes, the sensor feeding it, and the firmware underneath that has to hit its deadline every cycle. I came up through control engineering and embedded systems, and I've stayed there on purpose while the rest of the field moved to the browser.

Right now I'm the **Founding AI & FD Engineer at a stealth agentic startup**, building the systems below in production. Most of what I ship lives in private repos, so the graph is a better picture of what I do than anything I could pin to this profile.

<div align="center">
  <img src="heatmap.svg" alt="Contribution heatmap" width="100%"/>
  <br/>
  <sub>Shaded by quartiles of my own active days, so one 179-commit day doesn't wash out the rest.</sub>
</div>

## AI engineering

**Harness design.** The model is rarely the bottleneck — the harness around it is. I build the layer that turns raw capability into something dependable: context assembly and compaction, tool interfaces, memory that survives a session, verification loops, and the control logic deciding when an agent should retry, stop, or escalate. Hold the model fixed and improve only the harness and task completion moves double digits; that is where most of the real engineering lives.

**Multi-agent systems.** Orchestrating specialists instead of asking one model to do everything — sequential pipelines, parallel fan-out, planner-executor splits, and the routing and shared state that keep agents coherent rather than compounding each other's mistakes.

**Retrieval at scale.** Advanced RAG serving thousands of users: hybrid dense and sparse retrieval fused into a single ranking, query rewriting and decomposition, cross-encoder reranking, graph-backed indexes, chunk-level access control, and answers grounded with citations — plus the eval harnesses that prove a change actually helped instead of just feeling better.

**Fine-tuning and optimization.** Adapting models to a domain when prompting stops paying off, then making them cheap and fast enough to actually run: adapter-based fine-tuning, quantization, distillation, caching, and streaming.

**Realtime.** Systems where latency is a feature rather than a metric — voice and streaming interfaces in which a few hundred milliseconds decides whether something feels alive or broken.

## Control and robotics

ROS, MATLAB and Simulink, dynamic modelling and trajectory planning, state estimation, and firmware in C and C++ down to ESP-IDF on bare boards — BLE, OTA, sensor drivers, the parts that have to be right before anything intelligent can sit on top.

The work I care about most is where the two halves meet: perception and learned policies running on hardware with a power budget, a duty cycle, and no tolerance for a model that hangs.

## What I'm building

**Intuitive Evolution** — *in development.* Sustainable robotics, built on the idea that a robot should do more with less: less material, less energy, fewer parts you can't repair. That constraint drives the mechanical design, the power budget and the control stack, not just the pitch. Our first robot kit is **Alan**, and we open-sourced **[herm](https://github.com/jpalepu/herm_ws)**, the modular v1.0 that got us there. herm is still the most fun thing I've worked on.

On the software side I'm the founder of **[ahsk](https://ahsk.app)** — a voice-first AI assistant for the Mac: dictation under 250 ms, translation across 50+ languages, AI rewriting, all inside whatever app you're already in. I also co-created **[Cverra](https://cverra.com)**, which writes a resume against the actual job description instead of a template.

---

<div align="center">

**Open to** collaboration on robotics, control systems, and applied AI that has to run on real hardware.

<a href="mailto:jpalepu@icloud.com">jpalepu@icloud.com</a> · Rome, Italy

<sub><i>"In the midst of chaos, there is also opportunity."</i> — Sun Tzu</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:38bdf8,55:1e4b8f,100:0b1e3d&height=110&section=footer" alt="" width="100%"/>

</div>
