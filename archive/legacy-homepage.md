---
title: Earlier Site Summary
kicker: Earlier Work
lede: An earlier summary of work in HPC software, scientific computing infrastructure, and runtime-critical numerical code.
permalink: /archive/legacy-homepage/
---

This summary captures an earlier public description of my work before the current site structure was introduced.

## Earlier public summary

I am a computational scientist working on HPC software, scientific computing infrastructure, and runtime-critical numerical code. A large share of that work has centered on [GEOS](https://github.com/GEOS-DEV/), where I have contributed technical leadership, GPU portability work, and supporting infrastructure for large scientific simulation workflows.

Public work from that period included HIP and ROCm enablement for AMD GPU platforms, support for Frontier-era and El Capitan-era platforms, and software engineering around portability layers, third-party dependencies, build environments, and scientific workflow infrastructure.

<figure>
	<img src="{{ '/images/amd_instinct_mi250x_oam.png' | relative_url }}" alt="AMD Instinct MI250X module used as an illustrative image for GPU-oriented HPC work">
	<figcaption>GPU-oriented performance and portability work became a major thread in later HPC projects.</figcaption>
</figure>

The GEOS portability stack has involved tools such as [RAJA](https://github.com/LLNL/RAJA), [CHAI](https://github.com/LLNL/CHAI), [Umpire](https://github.com/LLNL/Umpire), and [LvArray](https://github.com/GEOS-DEV/LvArray/). My work in this area also included environment and dependency work using [Uberenv](https://github.com/LLNL/uberenv) and [Spack](https://github.com/spack/spack), along with related recipe and platform support work.

Other work from the same period included in-situ data extraction, JIT-oriented kernel work, serialization and halo-exchange infrastructure, asynchronous CPU and GPU overlap with MPI communication, modernization of older codebases, binary database and query-layer work, post-processing tools, CI and regression testing support, CMake and BLT-based build modernization, and workflow automation.

Before LLNL, I worked at the Scientific Computation Research Center at Rensselaer Polytechnic Institute as a postdoctoral researcher and graduate researcher, and I was also a Sandia National Laboratories Graduate Research Fellow from 2012 to 2015. That earlier work is summarized in more detail on [Earlier Research and Graduate Work](/archive/graduate-work/).
