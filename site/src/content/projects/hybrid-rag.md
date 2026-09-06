---
logo: cmu
title: Hybrid retrieval-augmented generation
summary: "Keyword search and embeddings, fused so each covers the other's blind spots, with a local open-source model doing the talking."
date: 2026-03-01
featured: true
order: 3
tags: [retrieval, llm]
repo: https://github.com/HaolingPu/anlp-spring2026-hw1
context: CMU Advanced NLP
title_zh: 混合检索增强生成
summary_zh: "关键词检索与向量检索互补盲区后融合，再由本地开源模型来回答。"
doodle: hybrid-rag
---

## Problem

Domain-specific factual question answering where neither keyword search nor embeddings alone are reliable.

## Approach

- Convert heterogeneous HTML and PDF sources into chunked embeddings and searchable FAISS and BM25 indexes.
- Hybrid retrieval: run both retrievers, fuse with reciprocal rank fusion, then generate with a locally served open-source LLM.
- Automated evaluation across retrieval relevance and answer quality.

## Result

A pipeline where each component can be swapped and measured independently, with the fused retriever beating either retriever alone on the evaluation set.
