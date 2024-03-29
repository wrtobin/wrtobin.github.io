## About Me 

I am a Computational Scientist working at Lawrence Livermore National Laboratory in Livermore, CA. 

I am currently the CS lead on the [GEOS](https://github.com/GEOS-DEV/) code. I was solely responsible for on our HIP/ROCM port, focusing on HPC platforms Frontier at ORNL and El Capitan at LLNL. I hit our ECP project stretch goals on Frontier during our early access period in Feb. 2023, levaraging 1/2 of the machine in the process. 

I am currently working in conjuction with devs on [Hypre](https://github.com/hypre-space/hypre) to develop an article on our results on Frontier and the MI250x, and other GEOS developers on an article related to matrix-free low-order FEM kernel performance on various accelerators including MI250x, V100, A100, and H100 (though if the LLNL El Cap test platform comes online in the interim we'll likely include the MI300a as well).

![AMD MI250x](images/amd_instinct_mi250x_oam.png)

The GEOS portability layers have relied on [RAJA](https://github.com/LLNL/RAJA), [CHAI](https://github.com/LLNL/CHAI), [Umpire](https://github.com/LLNL/Umpire), and [LvArray](https://github.com/GEOS-DEV/LvArray/). While working on our HIP/ROCM port I also ported our TPLs to [Uberenv](https://github.com/LLNL/uberenv)+[SPACK](https://github.com/spack/spack) which has included upstreaming fixes to spack in particular, modifying spack build recipes for HPC packages, and developing / maintaining spack environments on our target HPC platforms.

I've also implemented a low-level in-situ data extraction feature (dubbed TimeHistory) for GEOS to allow users to extract arbitrary fields / data of interest on the mesh / associated with the linear systems, worked on JIT compilation of our modern, highly-templated C++ physics kernels, developed and optimized our type- and array-layout agnostic serialization kernels used for halo-exchange operations over MPI, and developed hierarchical asynchronous algorithms overlapping CPU work / async GPU work / and async MPI communications. Additionally I contributed to our MPI wrapper layers and developed generic MPI phased-communication routines.

The above GEOS work represents approximately 50% of my time effort at LLNL from September 2019 - August 2023.

The other 50% of my time has involved similar work, and additionally: modernization efforts on legacy codebases, binary database design, database query-layer design and implementation, post-processing visualization tool development, optimization, and modernization, CI/CD support for legacy codebases, modernizing build-systems to use lab-standard CMake + [BLT](https://github.com/LLNL/blt), workflow automation, regression testing / workflow testing tool development, project management, and additional efforts.

I previously worked as a post-doctoral researcher and graduate researcher at the the Scientific Computation Research Center [(SCOREC)](https://www.scorec.rpi.edu/) at Rensselear Polytechnic Institute where I earned my PhD in Computer Science. Click [here](grad.md) for an overview of my work during grad school / postdoc work. During my time there I was also a Graduate Research Fellow at Sandia National Laboratory from 2012 to 2015. I primarily developed software for HPC machines and applications. My thesis work involved the development of tools and libraries for the efficient implementation and execution of multi-scale simulations on HPC architectures.