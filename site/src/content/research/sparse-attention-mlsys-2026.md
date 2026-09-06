---
logo: nvidia
title: Blackwell-optimized sparse attention kernel
venue: NVIDIA MLSys 2026 competition
status: competition
date: 2026-04-15
order: 2
summary: "A CUDA kernel for DeepSeek-style sparse attention on NVIDIA B200. It passed every workload in the competition, dozens of times faster than the PyTorch reference."
authors: [Haoling Pu]
links:
  - label: project write-up
    href: https://haolingpu.com/projects/sparse-attention-blackwell
title_zh: Blackwell 优化的稀疏注意力算子
venue_zh: NVIDIA MLSys 2026 竞赛
summary_zh: "面向 DeepSeek 风格稀疏注意力、运行在 NVIDIA B200 上的 CUDA 算子。通过了竞赛的全部负载，比 PyTorch 参考实现快几十倍。"
---

IO-aware fusion, Tensor Core pipelining, and per-workload autotuning applied to sparse attention for long-context inference. See the project page for the breakdown.
