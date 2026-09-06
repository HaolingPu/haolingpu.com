---
logo: nvidia
title: Sparse attention on Blackwell
summary: "A CUDA kernel that makes DeepSeek-style sparse attention fly on Blackwell. Passed every workload in NVIDIA's competition, dozens of times faster than the reference."
date: 2026-04-15
featured: true
order: 1
tags: [cuda, llm]
context: NVIDIA MLSys 2026 competition
private: true
title_zh: Blackwell 上的稀疏注意力
summary_zh: "一个让 DeepSeek 风格稀疏注意力在 Blackwell 上飞起来的 CUDA 算子。通过了 NVIDIA 竞赛的全部负载，比参考实现快几十倍。"
doodle: sparse-attn
---

## Problem

Long-context inference is bound by KV-cache traffic, not FLOPs. DeepSeek-V3's sparse attention selects a subset of keys per query, which helps in theory but leaves a naive kernel bouncing between global memory and compute.

## Approach

- **IO-aware fusion** in the FlashAttention style: keep the working set in shared memory and registers, stream KV blocks through once.
- **Tensor Core execution** on NVIDIA B200 with explicit memory pipelining so the next tile's loads overlap the current tile's math.
- **Parallel decomposition** across heads and query blocks, then **autotuning** of tile shapes and pipeline depth per workload.

## Result

Passed all 23 attention workloads in the competition suite at roughly 57 µs each, a 22–35× speedup over the PyTorch reference implementation.
