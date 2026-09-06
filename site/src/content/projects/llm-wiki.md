---
title: LLM Wiki
summary: A self-maintaining Obsidian knowledge base that an agent ingests into, queries, and lints, following Karpathy's LLM Wiki pattern.
date: 2026-06-01
featured: true
order: 2
tags: [agents, llm]
repo: https://github.com/HaolingPu/llm-wiki-meridian
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
