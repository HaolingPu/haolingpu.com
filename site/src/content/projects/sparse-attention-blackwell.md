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

## Why attention is expensive

Attention scores every query against every key:

```
Attention(Q, K, V) = softmax(Q Kᵀ / √d) V
```

For a sequence of length *n* that is an *n × n* score matrix, so compute and memory both grow with *n²*. At short lengths nobody notices. At the context lengths people now expect from language models, it is the thing standing between the prompt and the first token.

## Sparse attention helps, on paper

DeepSeek-V3's answer is to stop scoring every pair. Each query picks a small subset of keys worth attending to and ignores the rest. The arithmetic drops sharply.

The catch is that arithmetic was never the real bottleneck. During long-context inference the GPU spends most of its time *moving* the key-value cache, not multiplying it. A straightforward sparse kernel still gathers scattered keys from slow global memory, computes a little, and goes back for more. It does less math and waits just as long.

## What I built

A kernel for NVIDIA's B200 that treats memory traffic as the problem to solve:

- **Read each block once.** In the FlashAttention style, the working set lives in fast on-chip memory and key-value blocks stream through a single time. The full score matrix is never written out.
- **Load while you compute.** The next tile's loads are issued while the current tile is still on the Tensor Cores, so the memory system and the math units stay busy at the same time instead of taking turns.
- **Split the work so nothing idles.** Heads and query blocks are divided across the GPU so every unit has something to do even when a query's selected keys are uneven.
- **Tune per workload.** The best tile shape and pipeline depth change from one input shape to the next, so each workload gets its own configuration rather than one compromise.

## Result

It passed every workload in the competition suite, dozens of times faster than the PyTorch reference.

## What I took away

Sparsity makes a model cheaper to *describe*. It only makes it cheaper to *run* once the data movement is designed around it. The same idea shows up in my [streaming audio work](/projects/sglang-omni): the interesting performance problem is rarely the arithmetic.
