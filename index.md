### About Me

I am a computer science PhD candidate at Rensselaer Polytechnic Institute (RPI) in Troy, NY. I develop software for HPC machines and applications. My thesis work has been concerning the development of tools and libraries for the efficient implementation and execution of multi-scale numerical simulations on HPC architectures.

I'm also an avid hiker and a 46r (#10768) and I'm working on becoming a winter 46r as well. I'm also a leader in the RPI Graduate Outdoor Recreation Program (GORP) and design and lead both events for the general graduate student body and training events for GORP leaders-in-training. I'm CPR and WFA certified and hope to obtain my WFR certification soon.

### Research

My thesis and primary work has been the Adaptive Multi-scale Simulation Infrastructure (AMSI), a set of libraries to assist in the development and execution of numerically multi-scale simulations, specifically on HPC machines but targeting in particular the IBM BluegGene/Q architecture. Most performance runs involving AMSI-supported code have been conducted on the AMOS BlueGene/Q machine managed by the [CCI](http://cci.rpi.edu/).

Additionally I have conducted work to develop numerical HPC simulations and tools including a multi-scale soft biological tissue simulation using the AMSI libraries, the Simmetrix backend for the SCOREC/core tools, and am currently assisting in the development of several fusion codebases.

### Code 

[LAS](https://github.com/tobinw/las) Is a zero-overhead API for operating on linear algebraic systems, taking advantage of the C++ Curiously Recurring Template Pattern (CRTP) and aggressive inlining to optimize the API function calls away at compile-time. A CAPI version is currently in development which will have single-function overhead instead of zero overhead since the CAPI backend will be compiled versions of the inline C++ functions, which cannot be inlined into C or FORTRAN code which is why a CAPI is desireable.

[byte_stream](https://github.com/tobinw/byte_stream) A header-only library using C++11 variadic templates to assist in the serialization and deserialization of data structures. It can handle any Plain-old-datatype trivially, but for datatypes requiring a deep copy it can still provide utility. Mostly it was used to package up small objects to be sent over MPI to avoid defining a custom MPI_Datatype since defining custom MPI_Datatypes is essentially code duplication since you have to define your structure in two places: once in actual code and once to the MPI system.

[tensor](https://github.com/tobinw/tensor) Is a basic implementation of a tensor interface using C++11 variadic templates. It was an attempt at getting a general tensor datatype with low-overhead data access operators to be specialized and used in other libraries needing vectors, matrices, and possibly higher-order tensors, but was discontinued after some initial speculative implementation of a basic dense tensor type (densor).

### Publications and Presentations

