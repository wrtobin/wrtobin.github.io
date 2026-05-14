---
title: Earlier Research and Graduate Work
kicker: Earlier Work
lede: Research foundations, selected projects, and earlier work that shaped my current interests in HPC and scientific software.
permalink: /archive/graduate-work/
---

This material comes from graduate and postdoctoral work before my current LLNL role and reflects the technical foundations behind later work in scientific software and HPC.

## Research foundation

My dissertation, _The Adaptive Multi-scale Simulation Infrastructure (AMSI)_, focused on software and abstractions for implementing and executing general multi-scale simulations on HPC systems, with particular attention to IBM BlueGene/Q-era machines. The central idea was to make it practical to couple existing single-scale codes into new multi-scale simulations without forcing every application into a rigid new framework.

That work combined numerical simulation, software architecture, abstraction design, and execution strategy. It also fed into later work on finite element infrastructure, mesh and solver interfaces, coupling layers, and GPU-oriented scientific software.

## Selected projects and libraries

The projects below summarize graduate and postdoctoral work that can be described from public artifacts, publications, or high-level project context.

### WDMApp

Whole Device Modeling Application work explored the design of a coupling layer for bringing together multiple fusion simulation codes in a single reactor-scale workflow. The goal was a standalone library capable of supporting existing coupled implementations and future code additions.

### XGCm

XGCm was a fusion-oriented effort built around unstructured meshing techniques and helped motivate work on combining particle-in-cell methods, unstructured grids, and accelerator-oriented finite element assembly.

### m3d-c1

This work focused on improving the interaction between simulation code, meshing infrastructure, and linear algebra backends, with particular attention to finite element assembly efficiency, data locality, and degree-of-freedom ordering choices that affect sparse linear solver behavior.

### [msi](https://github.com/SCOREC/msi)

The Mesh Solver Interface is a minimal C API that bridges discretized domains, tensor fields, linear systems, and numerical kernels. It was designed as a practical interface layer between application code and multiple backend capabilities.

### [LAS](https://github.com/tobinw/las)

LAS is a zero-overhead API for distributed-memory and shared-memory linear algebraic systems. It uses CRTP and aggressive inlining to eliminate interface overhead in C++, while also generating a thin C API to support strict C and Fortran callers.

<figure>
	<img src="{{ '/images/las_mat_own.png' | relative_url }}" alt="LAS-managed matrix with MPI ownership ranges highlighted">
	<figcaption>A small PETSc matrix for the M3DC1 simulation using LAS to manage the linear system.</figcaption>
</figure>

### AMSI

AMSI supported the implementation and execution of multi-scale numerical simulations without forcing users to rewrite established single-scale codes around a rigid framework. It was especially well suited to hierarchical multi-scale simulations where scales were widely separated and coupling relationships could be represented cleanly.

### biotissue

This was a multi-scale soft-tissue simulation built on AMSI, coupling an engineering-scale finite element model with a micro-scale fiber-network representative volume element.

<figure>
	<img src="{{ '/images/bio_scales.png' | relative_url }}" alt="Engineering-scale tissue mesh coupled to a micro-scale fiber-network representative volume element">
	<figcaption>The two biotissue scales: an engineering-scale mesh coupled to a micro-scale fiber-network model.</figcaption>
</figure>

### [byte_stream](https://github.com/tobinw/byte_stream)

`byte_stream` is a lightweight C++11 variadic-template library for serialization and deserialization of structured data. It was particularly useful for packaging small objects for MPI communication without duplicating structure definitions as custom `MPI_Datatype` descriptions.

### [tensor](https://github.com/tobinw/tensor)

`tensor` was an early attempt at a general low-overhead tensor interface for vectors, matrices, and higher-order tensors. The project was exploratory and ultimately discontinued, but it informed later work on reusable numerical data abstractions.

## Publications and talks from that period

- Victor W. L. Chan, William R. Tobin, Sijia Zhang, Beth A. Winkelstein, Victor H. Barocas, Mark S. Shephard, and Catalin R. Picu. _Image-Based Multi-scale Mechanical Analysis of Strain Amplification in Neurons Embedded in Collagen Gel_. Later published in _Computer Methods in Biomechanics and Biomedical Engineering_.
- William R. Tobin, Victor W. L. Chan, and Mark S. Shephard. _Dynamic Load Balancing for Multiscale Simulations_. CSE Seminar Series, Rensselaer Polytechnic Institute, 2015.
- William R. Tobin, Victor W. L. Chan, and Mark S. Shephard. _Load Balancing Multiscale Simulations_. SIAM Conference on Computational Science and Engineering, 2015.
- William R. Tobin, Daniel Fovargue, and Mark S. Shephard. _Parallel Infrastructure for Multiscale Simulation_. SIAM Conference on Parallel Processing for Scientific Computing, 2014.

## Awards from that period

- Graduate Research Fellowship, Sandia National Laboratories, 2012 to 2015.
- SIAM Travel Award, SIAM Conference on Computational Science and Engineering, 2015.

## Current context

This earlier work remains relevant because it reflects the same through-line as my current work: numerical software, HPC systems, mixed-language infrastructure, and the engineering work required to make complex technical codes practical.
