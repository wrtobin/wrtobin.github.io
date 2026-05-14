---
title: Capabilities
kicker: Work Areas
lede: Broad technical areas and working style across HPC, scientific software, and computational science.
permalink: /capabilities/
---

## Technical Positioning

This page summarizes the technical areas I work in: HPC software, numerical computing, performance engineering, mixed-language systems, reproducibility, and long-lived research software.

I am particularly effective in demanding HPC codebases that need broad technical ownership rather than narrow feature work. I work well where progress depends on connecting low-level implementation detail with higher-level engineering direction and keeping a codebase coherent as it evolves.

That includes numerical kernels, MPI behavior, accelerator enablement, data movement, build and packaging systems, test strategy, and the engineering work required to keep a code useful across changing machines, teams, and workflows. It also extends beyond the primary simulation code itself to surrounding tools such as visualization systems, results formats, query layers, and the infrastructure needed to make analysis and validation practical.

In practice, that often means technical-lead work on both legacy but still operational tools and the newer systems meant to replace them.

## Performance Engineering

I work on software where runtime cost is part of the design problem, not just a post-processing concern. That includes measurement strategy, kernel behavior, data movement, memory layout, and the practical engineering needed to make performance work reproducible instead of anecdotal.

The goal is usually not isolated speedups in the abstract, but reliable performance understanding that can survive code changes, machine changes, and repeated measurement.

## Scientific and Numerical Software

I build and maintain software for simulation, numerical analysis, and research workflows. The emphasis is usually less on isolated algorithms in the abstract and more on getting numerical methods, data structures, and operational constraints to fit together cleanly in real code.

That generally means treating numerical behavior, interface design, and workflow constraints as one engineering problem rather than separate concerns.

## Parallel and Distributed Computing

My background includes distributed-memory and node-level parallel work, with attention to decomposition, communication patterns, synchronization cost, and the operational realities of research computing environments.

I tend to think about parallel work at both the algorithmic and systems levels: how the decomposition behaves, how communication costs accumulate, and how the implementation survives on real machines rather than only in idealized models.

## Mixed-Language Codebases

I am comfortable working across C, C++, Fortran, Python, and Rust, especially where those languages need to coexist in a single maintainable system. Typical concerns include ABI boundaries, build integration, testing strategy, packaging, and keeping the high-level interface honest about what the low-level implementation is doing.

I am usually more interested in choosing the right language boundary for a problem than in forcing the whole system into a single implementation style.

## Reproducibility and Build Systems

Strong technical work depends on builds and environments that can be repeated. I care about versioned dependency management, portable build logic, automation, and enough discipline in the workflow that results can be regenerated and explained later.

That also extends beyond the build itself. I care about provenance: capturing enough project, binary, machine, and invocation state to make results defensible later. Profiling, replay, and comparison should be part of the normal engineering workflow rather than an afterthought.

## Testing and Numerical Correctness

I treat testing for scientific software as more than a pass or fail gate. Numerical tolerances, reference comparisons, invariants, edge-case behavior, and the difference between stable behavior and accidental agreement all matter.

That perspective has led me to build general testing infrastructure rather than only one-off test scripts. Useful regression systems support multi-phase execution, CI-oriented contexts, multiple batch environments, and comparison strategies that match the data being tested.

The harder part is deciding what kind of difference actually matters. For scientific and HPC software, I care about structural, lexical, numerical, and curve-based comparisons, especially when correctness has to survive different architectures, execution paths, and floating-point behavior. I also care about the operational side: scheduler integration, repeatable execution on real machines, and workflows that keep correctness checks practical as a codebase evolves.

## Research Software Maintainability

Research code often has to survive shifting hardware, shifting teams, and shifting problem statements. I focus on interfaces, documentation, build clarity, and incremental modernization so a codebase can keep moving without becoming impossible to reason about.

That usually means improving the parts of a system that make future change easier: interfaces, invariants, tooling, and the day-to-day readability of the code.

## Working Style

I prefer careful interfaces, measured optimization, strong testing, and designs that remain understandable after the first implementation pass. In HPC software, correctness, reproducibility, observability, and operability matter as much as raw speed.

I value steady technical progress over churn: fewer fragile rewrites, more deliberate improvements that leave the codebase clearer and more capable than it was before.
