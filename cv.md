---
title: CV
kicker: Curriculum Vitae
lede: A longer-form academic and technical summary of work in HPC, scientific software, and computational science.
permalink: /cv/
---

## Profile

I am William Reading Tobin, a staff scientist working at the intersection of high-performance computing, numerical methods, and software engineering. My work centers on runtime-critical scientific software, mixed-language systems, parallel computing workflows, and the engineering practices required to keep complex technical codebases reliable over time.

I am strongest in roles that require broad technical ownership across a codebase rather than narrow implementation at a single layer. I work well as a technical lead in environments where progress depends on connecting low-level implementation detail with higher-level engineering direction, coordinating across multiple moving parts, and keeping a codebase technically coherent as it evolves.

That includes numerical kernels, distributed-memory behavior, accelerator portability, language boundaries, build and packaging systems, testing strategy, and the practical maintenance work that keeps scientific software useful on real machines. It also extends beyond the primary simulation code itself to the surrounding software ecosystem: postprocessing and visualization tools, results formats, query layers, and the infrastructure needed to make analysis, validation, and day-to-day development practical.

I am also increasingly interested in rigorous provenance for computational results: not just whether a benchmark or figure can be rerun, but whether the exact project state, binary state, machine context, invocation path, and profiling workflow can be captured well enough to support both reproduction and technical proof.

## Research and technical interests

- High-performance scientific computing and research software engineering.
- Scientific software and numerical methods.
- Performance engineering and measurement-driven optimization.
- Parallel and distributed computing.
- Accelerator-oriented implementation, GPU portability, and heterogeneous-node execution.
- Mixed-language systems spanning C, C++, Fortran, Python, and Rust.
- Reproducibility, build systems, testing, and long-lived maintainability.

## Technical profile

- HPC technical lead comfortable contributing across algorithms, kernels, communication infrastructure, runtime behavior, toolchains, developer workflow design, and the surrounding analysis and results infrastructure that serious simulation work depends on.
- Strong fit for large, long-lived scientific codebases that need both deep low-level work and broad engineering coordination.
- Comfortable taking ownership of unfamiliar systems quickly and finding useful improvements in correctness, scalability, performance, operability, and maintainability.
- Most effective where scientific requirements and software-engineering discipline have to coexist at full scale.

## Professional experience

### Staff Scientist / Computational Scientist

Lawrence Livermore National Laboratory, Livermore, California, 2019 to present

- Staff scientist working on runtime-critical scientific software and research computing infrastructure.
- Technical leadership on the GEOS codebase during my active period on the project, alongside technical lead responsibilities across HPC simulation codes, postprocessing and visualization tools, database formats, and query infrastructure.
- GPU and performance-portability work including HIP and ROCm-oriented development for Frontier-era and El Capitan-era AMD platforms.
- Large-scale exascale-readiness work for GEOS, including Frontier early-access runs and subsequent scaling and performance work.
- Development of in-situ data extraction, serialization and halo-exchange infrastructure, and hierarchical asynchronous CPU, GPU, and MPI overlap.
- Build, packaging, testing, Spack and Uberenv environment work, and modernization of long-lived technical workflows.
- Additional work in modernization, binary database and query-layer design, post-processing tooling, regression testing, and workflow automation.
- Technical capacity spanning kernel-level implementation, systems-facing engineering, and codebase-level architectural decisions.
- Work on profiling, reproduction, and provenance workflows for capturing precise project, binary, machine, and invocation state behind performance results and technical comparisons.
- Built and extended reusable HPC testing infrastructure for legacy simulation software, including large nightly regression suites, multi-phase execution, CI-aware operation, multiple batch-dispatch environments, and several comparison strategies for structural, lexical, numerical, and curve-based correctness checks.
- Technical lead for legacy but still operational postprocessing, visualization, and database tooling, including maintenance and modernization work on Mili- and Griz-related workflows while newer replacements are developed.
- Fully authored the `mili-python` query layer for Mili databases, providing a Python-facing bridge from legacy simulation database content into more modern analysis workflows.

### Postdoctoral Researcher

Scientific Computation Research Center, Rensselaer Polytechnic Institute, Troy, New York, 2018 to 2019

- Developed software and methods for accelerated finite-element assembly procedures in fusion-oriented scientific computing.
- Worked on low-overhead abstraction layers, backend integration, and hybrid-parallel assembly strategies.
- Contributed to software for coupled multi-code workflows and whole-device modeling support.

### Graduate Research Assistant

Scientific Computation Research Center, Rensselaer Polytechnic Institute, Troy, New York, 2012 to 2018

### Graduate Research Fellow

Sandia National Laboratories, Albuquerque, New Mexico, 2012 to 2015

- Developed algorithms and libraries to support adaptive multi-scale simulation workflows on HPC systems.
- Built software for multi-scale soft biological tissue simulation combining finite-element analysis with fiber-network models.
- Worked across conceptual modeling, mathematical formulation, and implementation-level software design.

### Earlier research and programming work

- Research Programmer, Environmental Systems Graduate Program, Cal Poly Humboldt.
- Lead Research Assistant, Research Experience for Undergraduates, Department of Computer Science, Cal Poly Humboldt.

## Education

### PhD in Computer Science

Rensselaer Polytechnic Institute, 2018

Dissertation: _The Adaptive Multi-scale Simulation Infrastructure_. The dissertation focused on software and abstractions for constructing and executing general multi-scale simulations on HPC architectures, with emphasis on coupling existing single-scale codes, adaptive operations, and scalable execution support.

### BS in Computer Science

Cal Poly Humboldt, 2011

### BA in Applied Mathematics

Cal Poly Humboldt, 2011

## Selected publications

- Randolph R. Settgast and collaborators, including William R. Tobin. 2024. _GEOS: A performance portable multi-physics simulation framework for subsurface applications_. Journal of Open Source Software.
- Randolph R. Settgast, Yohann Dudouit, Nicola Castelletto, William R. Tobin, Benjamin C. Corbett, and Sergey Klevtsov. 2023. _Performant low-order matrix-free finite element kernels on GPU architectures_. [arXiv:2308.09839](https://arxiv.org/abs/2308.09839)
- Victor W. L. Chan, William R. Tobin, Sijia Zhang, Beth A. Winkelstein, Victor H. Barocas, Mark S. Shephard, and Catalin R. Picu. 2018. _Image-based Multi-scale Mechanical Analysis of Strain Amplification in Neurons Embedded in Collagen Gel_. Computer Methods in Biomechanics and Biomedical Engineering 22, 113-129.

## Selected presentations

- Randolph Settgast, David Trebotich, Victor A. Magri, William R. Tobin, and Terry J. Ligocki. _Development of an Exascale Subsurface Simulator of Coupled Flow, Transport, Reactions, and Mechanics_. SIAM Conference on Parallel Processing for Scientific Computing, Baltimore, Maryland, 2024. Presented by William R. Tobin.
- Randolph Settgast, William R. Tobin, Nicola Castelletto, Yohann Dudouit, Sergey Klevtsov, and Benjamin Corbett. _Performant Low-order Matrix-free Finite Element Kernels on GPU Architectures_. SC23 Research Posters, 2023.
- William R. Tobin, Victor W. L. Chan, and Mark S. Shephard. _Load Balancing Multiscale Simulations_. SIAM Conference on Computational Science and Engineering, 2015.
- William R. Tobin, Daniel Fovargue, and Mark S. Shephard. _Parallel Infrastructure for Multiscale Simulation_. SIAM Conference on Parallel Processing for Scientific Computing, 2014.

## Teaching and professional service

- Guest Lecturer, Version Control Best Practices, Software Design and Documentation, 2018.
- Teaching Assistant, Software Design and Documentation, 2017.
- Teaching Assistant, Foundations of Computer Science, 2011.

## Honors and awards

- Excellence Award, LLNL Applications, Simulations, and Quality, 2023.
- Director's Gold Award, LLNL Strategic Deterrence, 2020.
- SIAM Computational Science and Engineering Travel Award, 2015.
- Graduate Research Fellowship, Sandia National Laboratories, 2012 to 2015.

## Public software and profiles

- Professional website: [wrtobin.com](https://wrtobin.com)
- GitHub: [github.com/wrtobin](https://github.com/wrtobin)
- LinkedIn: [linkedin.com/in/william-reading-tobin-phd-51b5321b](https://www.linkedin.com/in/william-reading-tobin-phd-51b5321b)
- ORCID: [orcid.org/0009-0001-3960-6064](https://orcid.org/0009-0001-3960-6064)
- Public open-source and publication links are collected on [Public Work](/public-work/).

## Technical toolkit

- Languages and environments: C, C++, Fortran, Python, Rust, CMake, MPI, OpenMP, CUDA, HIP, MATLAB, JavaScript, and SQL.
- Tools and libraries: RAJA, CHAI, Umpire, CAMP, Conduit, HDF5, VTK, Spack, Git, LLVM/Clang, GCC, NumPy, Pandas, Jenkins, and GitLab CI.
- Platforms and workflows: large-scale HPC systems, batch schedulers, heterogeneous architectures, and mixed interactive plus batch research workflows.

## Positioning

In HPC settings, I am most effective where a project needs someone who can move fluidly between performance work, scientific correctness, software design, and delivery infrastructure. I am comfortable taking technical responsibility for difficult software systems and helping them become faster, clearer, more portable, and more maintainable.

## Archive

Earlier research and graduate work appears in [Graduate and Postdoctoral Work](/archive/graduate-work/).
