<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1e3d,45:1e4b8f,100:38bdf8&height=190&section=header&text=Jithin%20Kumar%20Palepu&fontSize=44&fontColor=ffffff&fontAlignY=34&desc=AI%20in%20physical%20systems%20%C2%B7%20Robotics%20%C2%B7%20Control&descAlignY=54&descSize=17" alt="Jithin Kumar Palepu" width="100%"/>

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=21&pause=1200&color=38BDF8&center=true&vCenter=true&width=680&lines=AI+in+physical+systems;Robotics+%C2%B7+Control+%C2%B7+Embedded;Agents+%C2%B7+Systems+%C2%B7+Robots;Founding+AI+%26+FD+Engineer;Robots+that+do+more+with+less" alt="AI in physical systems" /></a>

<br/>

<a href="https://ahsk.app"><img src="https://img.shields.io/badge/ahsk.app-0b1e3d?style=for-the-badge&logo=apple&logoColor=ffffff" alt="ahsk"/></a>
<a href="https://github.com/jpalepu/herm_ws"><img src="https://img.shields.io/badge/herm_robot-0b1e3d?style=for-the-badge&logo=probot&logoColor=38bdf8" alt="herm robot"/></a>
<a href="mailto:jpalepu@icloud.com"><img src="https://img.shields.io/badge/Email-0b1e3d?style=for-the-badge&logo=icloud&logoColor=38bdf8" alt="Email"/></a>

</div>

---

I work on AI in physical systems, which means robotics and control as much as machine learning.

A learned policy is only as good as the loop it closes and the sensor feeding it, and the firmware underneath still has to hit its deadline every cycle. I came up through control engineering and embedded systems and never really left.

Right now I'm the Founding AI & FD Engineer at a stealth agentic startup. Most of what I ship sits in private repos, so the graph below says more about my work than anything I can link here.

<div align="center">
  <img src="heatmap.svg" alt="Contribution heatmap" width="100%"/>
  <br/>
  <sub>Shaded by quartiles of my own active days, so one 179-commit day doesn't wash out the rest.</sub>
</div>

## AI engineering

**Harness design.** Most of the difficulty in agent work isn't the model, it's everything wrapped around it. I build that layer: context assembly and compaction, tool interfaces, memory that survives a session, verification loops, and the logic deciding when an agent should retry, stop or hand off. Holding the model fixed and improving only the harness is worth a large jump in task completion, so it gets most of my time.

**Multi-agent systems.** Orchestrating specialists instead of asking one model to do everything. Sequential pipelines, parallel fan-out, planner and executor splits, plus the routing and shared state that stop agents from compounding each other's mistakes.

**Retrieval at scale.** Advanced RAG serving thousands of users. Hybrid dense and sparse retrieval fused into one ranking, query rewriting and decomposition, cross-encoder reranking, graph-backed indexes, chunk-level access control, and grounded answers with citations. Alongside it, the eval harnesses that show whether a change actually helped.

**Fine-tuning and optimization.** Adapting models to a domain once prompting stops paying off, then getting them cheap and fast enough to run in production. Adapter-based fine-tuning, quantization, distillation, caching and streaming.

**Realtime.** Voice and streaming interfaces where latency is most of the product. A few hundred milliseconds decides whether people keep using the thing.

## Control and robotics

ROS, MATLAB and Simulink, dynamic modeling and trajectory planning, state estimation, and firmware in C and C++ down to ESP-IDF on bare boards. BLE, OTA, sensor drivers, the parts that have to work before anything intelligent can sit on top.

What I actually want to build sits between the two sections above: perception and learned policies running on hardware with a power budget, a duty cycle and no room for a model that hangs.

## What I'm building

**Intuitive Evolution** (*in development*). Sustainable robotics, built on the idea that a robot should do more with less. Less material, less energy, fewer parts you can't repair. That constraint drives the mechanical design, the power budget and the control stack. Our first robot kit is **Alan**, and we open sourced **[herm](https://github.com/jpalepu/herm_ws)**, the modular v1.0 that got us there. herm is still the most fun thing I've worked on.

On the software side I founded **[ahsk](https://ahsk.app)**, a voice-first AI assistant for the Mac. Dictation under 250 ms, translation across 50+ languages and AI rewriting, all inside whatever app you're already in. I also co-created **[Cverra](https://cverra.com)**, which writes a resume against the actual job description instead of a template.

---

<div align="center">

**Open to** collaboration on robotics, control systems and applied AI that has to run on real hardware.

<a href="mailto:jpalepu@icloud.com">jpalepu@icloud.com</a> · Rome, Italy

<sub><i>"In the midst of chaos, there is also opportunity."</i> Sun Tzu</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:38bdf8,55:1e4b8f,100:0b1e3d&height=110&section=footer" alt="" width="100%"/>

</div>
