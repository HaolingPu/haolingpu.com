---
title: Sparse attention on Blackwell
summary: A Blackwell-optimized CUDA kernel for DeepSeek-V3 sparse attention, 22–35× faster than the PyTorch reference.
date: 2026-04-15
featured: true
order: 1
tags: [cuda, llm]
context: NVIDIA MLSys 2026 competition
private: true
---

## Problem

Long-context inference is bound by KV-cache traffic, not FLOPs. DeepSeek-V3's sparse attention selects a subset of keys per query, which helps in theory but leaves a naive kernel bouncing between global memory and compute.

## Approach

- **IO-aware fusion** in the FlashAttention style: keep the working set in shared memory and registers, stream KV blocks through once.
- **Tensor Core execution** on NVIDIA B200 with explicit memory pipelining so the next tile's loads overlap the current tile's math.
- **Parallel decomposition** across heads and query blocks, then **autotuning** of tile shapes and pipeline depth per workload.

## Result

Passed all 23 attention workloads in the competition suite at roughly 57 µs each, a 22–35× speedup over the PyTorch reference implementation.
