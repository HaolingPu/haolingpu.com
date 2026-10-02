---
logo: bny
doodle: agent-loop
title: Agent Anchor
title_zh: Agent Anchor
summary: "Keeping production AI agents from quietly getting worse: a loop that notices when quality drops, finds the cause, and checks the fix."
summary_zh: "让生产环境里的 AI 智能体不再悄悄变差：一个能发现质量下降、找到原因、并检验修复的闭环。"
date: 2026-09-20
featured: true
order: 3
tags: [agents, llm]
context: CMU capstone · BNY
private: true
---

## What it is

An industry capstone with BNY. AI agents in production can quietly get worse as the models, prompts and tools underneath them change, and today a person usually notices before the system does. Agent Anchor is a loop that catches it first.

## The loop

- **Notice** a real drop in quality.
- **Diagnose** what changed.
- **Fix** it.
- **Verify** the fix didn't break anything else.

## My part

I work on both ends: deciding what should count as an agent getting worse, and checking that a fix actually helps before it ships.
