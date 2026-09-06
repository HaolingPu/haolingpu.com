---
logo: nvidia
title: Blackwell-optimized sparse attention kernel
venue: NVIDIA MLSys 2026 competition
status: competition
date: 2026-04-15
order: 2
summary: A CUDA kernel for DeepSeek-V3 sparse attention on NVIDIA B200 that passed all 23 competition workloads at 22–35× the speed of the PyTorch reference.
authors: [Haoling Pu]
links:
  - label: project write-up
    href: https://haolingpu.com/projects/sparse-attention-blackwell
---

IO-aware fusion, Tensor Core pipelining, and per-workload autotuning applied to sparse attention for long-context inference. See the project page for the breakdown.
