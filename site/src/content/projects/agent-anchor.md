---
logo: bny
doodle: agent-loop
title: Agent Anchor
title_zh: Agent Anchor
summary: "Keeping production AI agents from quietly getting worse: a loop that notices degradation, finds the cause, and checks that the fix doesn't break anything else."
summary_zh: "让生产环境里的 AI 智能体不再悄悄变差：一个能发现退化、找到原因、并确认修复不会弄坏别的东西的闭环。"
date: 2026-09-20
featured: true
order: 3
tags: [agents, llm]
context: CMU capstone · BNY
private: true
---

## Problem

An AI agent that worked well last month can be worse today without anyone touching it. The model gets updated, a prompt is edited, a tool starts behaving differently, the documents it reads go stale, or the people using it start asking different questions.

Usually the first sign is a user retrying, correcting the answer, or escalating to a person. That means a human found the problem before the system did. And when someone does fix it, the fix can solve today's failure while breaking something that worked yesterday.

## What we're building

Agent Anchor is an industry capstone with BNY, built by a team of five at Carnegie Mellon. The goal is a closed loop around every production agent:

- **Notice** when an agent has meaningfully degraded, and tell that apart from ordinary noise and variance.
- **Diagnose** whether the cause is the model, the prompt, a tool, the data, or the harness around it.
- **Remember** past incidents, so a failure one team already solved isn't investigated from scratch by another.
- **Propose a fix** and route it to the team that owns the agent.
- **Verify** the fix before it goes anywhere near production.

## My part

I work on the two ends of the loop.

At the front, the question is what "degraded" should even mean, and which signals can catch it when there are no ground-truth labels to check against. We start with a narrow set of failure types rather than trying to catch everything.

At the back, the question is whether a fix can be trusted. Every candidate change runs against the case that failed *and* against a suite of behavior that used to pass. It only moves forward if both hold.

## Why it's interesting

Detection gets most of the attention, but verification is where trust is won. A system that repairs one thing and quietly breaks two others is worse than no system at all.

This builds on what I did at Google, where an [agent kept a team's knowledge base current](/projects/team-knowledge-agent). There, the agent maintained knowledge. Here, the system maintains the agents.
