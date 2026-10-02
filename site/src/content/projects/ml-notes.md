---
doodle: notes-map
title: ML Notes
title_zh: ML 笔记
summary: "Everything between a prompt and a token, one mechanism at a time: an interactive map of the LLM serving stack, from attention and the KV cache to agents and GPU kernels."
summary_zh: "从 prompt 到 token 之间发生的一切，一次讲清一个机制：一张可交互的大模型推理全链路地图，从注意力、KV cache 到智能体和 GPU 算子。"
date: 2026-10-02
featured: true
order: 4
tags: [llm, systems]
context: personal project
repo: https://github.com/HaolingPu/ml-notes
demo: https://haolingpu.github.io/ml-notes/
---

## What it is

Notes on how large language models actually run, written the way I wish I had learned it. Each mechanism gets its own step-through page instead of a wall of text, and every page sits on one map of the stack, so you can see where it fits.

## Four tracks

- **Infrastructure** — from prompt to token: prefill and decode, the KV cache, batching, and what happens when one GPU is not enough.
- **Agents** — the loop that wraps the model: context, tools and memory.
- **Blackwell** — one CUDA kernel, taken from 600 microseconds to 57.
- **Foundations** — from a single neuron to a trained network.

[Open the notes ↗](https://haolingpu.github.io/ml-notes/)
