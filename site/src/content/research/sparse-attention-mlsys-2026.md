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
title_zh: Blackwell 优化的稀疏注意力算子
venue_zh: NVIDIA MLSys 2026 竞赛
summary_zh: 面向 DeepSeek-V3 稀疏注意力、运行在 NVIDIA B200 上的 CUDA 算子，通过全部 23 个竞赛负载，速度为 PyTorch 参考实现的 22–35 倍。
---

IO-aware fusion, Tensor Core pipelining, and per-workload autotuning applied to sparse attention for long-context inference. See the project page for the breakdown.
