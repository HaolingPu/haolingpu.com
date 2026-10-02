---
logo: sglang
doodle: stream-audio
title: Streaming audio in SGLang-Omni
title_zh: SGLang-Omni 的流式音频
summary: "Contributor to the open-source serving framework for speech models. My work is on making the audio arrive on time, not just arrive."
summary_zh: "开源语音模型推理框架的贡献者。我做的是让音频准时到达，而不只是到达。"
date: 2026-10-02
featured: true
order: 2
tags: [llm, systems]
context: open source · sgl-project/sglang-omni
repo: https://github.com/sgl-project/sglang-omni
---

## Problem

When a model speaks out loud, the audio has to keep up with the listener. A gap of a few hundred milliseconds is not a slow page, it is a stutter in someone's voice. Serving frameworks are tuned for tokens per second; speech needs a chunk of sound ready *before* the previous one finishes playing.

## What I worked on

- **Seeing the gap.** The request timeline showed when a codec frame reached the vocoder and when audio reached the client, but nothing in between. I added decode-step events, so a late chunk can be explained instead of guessed at.
- **Letting urgent work cut the line.** With those events it became clear that follow-up chunks were waiting behind work that nobody was listening to yet. Urgent chunks now launch first and commit when they finish.
- **Not letting one slow listener win.** Each stream held an unbounded queue of finished audio. One client that read slowly could keep growing memory after its generation was done. That queue now has a ceiling.

## Why it's interesting

All three are the same lesson in different clothes: in a streaming system, finishing fast is not the goal. Arriving on time is. It is the same question my [research](/research) asks of translation, one layer further down.
