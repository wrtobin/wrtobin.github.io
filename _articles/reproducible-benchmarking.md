---
title: Reproducible Benchmarking for Scientific Software
date: 2026-05-13
published: false
status: Draft
summary: A practical outline for measuring scientific software without turning benchmark numbers into one-off anecdotes.
---

Benchmarking is easy to do badly because software results are produced by an entire stack, not just a source file. Compiler choices, problem sizes, environment modules, thread affinity, input conditioning, cache state, and I/O behavior all shape the number that eventually gets quoted.

## Start by defining the question

The first job is to decide what the benchmark is intended to answer. Are you comparing algorithmic variants, checking whether a code path regressed, characterizing scaling behavior, or verifying that a build change did not perturb runtime materially? Different questions require different controls.

## Record enough context to repeat the run

At minimum, a benchmark record should include:

- source revision + local diff
- compiler, version, and flags
- machine, node, and execution environment
- problem size and full input description
- thread and rank counts and affinity settings
- a robust description of the measurement method, including what is being timed and how the timer is managed

If that information is missing, the result may still be interesting, but it is not reproducible in the engineering sense.

The stronger version of this idea is provenance rather than simple rerunability. For serious technical work, it is useful to capture not just the source revision, but the exact project tree state, the produced binaries, the machine and scheduler context, the invocation path, and the profiling workflow used to generate the result. That level of detail makes it easier to defend a number later instead of merely hoping it can be approximated.

## Control the workflow, not just the timer

Scientific software often spends time in setup, preprocessing, warmup, communication, output, and teardown. Those phases may or may not belong in the measurement, but the decision needs to be explicit. Hidden movement between phases is a common source of benchmark confusion.

It is also why a good profiling harness is worth building. If small source changes can be related to a DAG of previous edits and paired with replayable profiling workflows, then comparison becomes much more disciplined. That helps in two very different modes: careful provenance for papers and proofs, and fast-turnaround hackathon work where you want to make a series of small changes, rerun the exact workflow, and compare approaches without losing track of what changed.

## Prefer a small number of trustworthy benchmarks

It is usually better to maintain a small benchmark suite with stable definitions than a large collection of ad hoc runs. A benchmark you can rerun next month is worth more than a large spreadsheet of numbers you cannot explain.

## Further Directions

Useful extensions here include concrete examples for single-node kernel timing, distributed benchmark metadata capture, and simple regression thresholds that do not overreact to normal system noise.
