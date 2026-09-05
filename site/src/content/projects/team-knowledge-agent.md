---
title: Agentic team knowledge system
summary: An agent that builds and continuously maintains an engineering team's knowledge base, shipped for cross-team use at Google.
date: 2026-08-15
featured: true
order: 4
tags: [agents, llm, production]
context: Google internship
private: true
---

## Problem

Engineering knowledge lives in hundreds of documents that go stale faster than anyone can curate them. New team members spend weeks finding what already exists.

## Approach

An agentic pipeline that discovers sources, ingests only what changed, synthesizes pages, audits itself for drift, and delivers updates on a schedule. Exposed as a reusable agent skill that answers questions with citations back to the source documents.

Details are kept deliberately high level here.

## Result

Adopted beyond the original team, cutting onboarding time and making existing knowledge discoverable.
