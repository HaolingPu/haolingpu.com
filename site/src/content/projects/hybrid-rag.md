---
logo: cmu
title: Hybrid retrieval-augmented generation
summary: An end-to-end RAG system built from scratch, with BM25 and dense retrieval fused by reciprocal rank fusion and local open-source inference.
date: 2026-03-01
featured: true
order: 3
tags: [retrieval, llm]
repo: https://github.com/HaolingPu/anlp-spring2026-hw1
context: CMU Advanced NLP
title_zh: 混合检索增强生成
summary_zh: 从零搭建的端到端 RAG 系统，BM25 与稠密检索经倒数排名融合后，由本地开源模型完成生成。
---

## Problem

Domain-specific factual question answering where neither keyword search nor embeddings alone are reliable.

## Approach

- Convert heterogeneous HTML and PDF sources into chunked embeddings and searchable FAISS and BM25 indexes.
- Hybrid retrieval: run both retrievers, fuse with reciprocal rank fusion, then generate with a locally served open-source LLM.
- Automated evaluation across retrieval relevance and answer quality.

## Result

A pipeline where each component can be swapped and measured independently, with the fused retriever beating either retriever alone on the evaluation set.
