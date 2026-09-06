---
title: LLM Wiki
summary: "A wiki that writes itself: an agent reads sources, links pages, and cleans up its own contradictions. Karpathy's LLM Wiki idea, made real."
date: 2026-06-01
featured: true
order: 2
tags: [agents, llm]
repo: https://github.com/HaolingPu/llm-wiki-meridian
title_zh: LLM 维基
summary_zh: "一个会自己写自己的维基：智能体读来源、连页面、还会清理自相矛盾的地方。Karpathy 的 LLM Wiki 想法，落地版。"
doodle: self-wiki
---

## Problem

RAG answers questions but never accumulates understanding. Every query starts from scratch and nothing gets corrected over time.

## Approach

A persistent, interlinked markdown wiki that a coding agent maintains, not a vector index. Three layers: raw sources, wiki pages, and a schema that tells the agent how pages must look.

- `acquire` fetches and normalizes sources (docs, notebooks, PDFs) with change detection, so unchanged sources are skipped.
- `ingest` has the agent write or update pages, keeping every claim linked back to its source.
- `lint` runs deterministic checks (broken links, missing sources, orphans) and an agent pass for contradictions.

The public edition targets Google's open-source Meridian marketing-mix-modeling library as its corpus.

## Result

A knowledge base that compounds: each ingest makes the next answer better, and every page cites where it came from.
