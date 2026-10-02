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

## The problem

DeepSeek-style sparse attention lets each query read only a small set of a long context's keys instead of all of them. That removes most of the arithmetic, and replaces it with scattered, irregular memory reads.

## How it got fast

Four versions, each answering the bottleneck the previous one exposed:

- **Tensor Cores** — make the math fast.
- **Overlap the gather** — stop waiting on scattered loads.
- **Split the work** — the change that mattered. The first versions gave the GPU only 8 blocks of work for its 148 SMs, so most of the chip sat idle. Splitting along the keys filled the whole thing.
- **Autotune** — measure each shape instead of guessing.

## Result

It passed every workload in the competition, dozens of times faster than the PyTorch reference.

The full walkthrough, with a diagram for each version, is in my [ML notes](https://haolingpu.github.io/ml-notes/#/blackwell).
