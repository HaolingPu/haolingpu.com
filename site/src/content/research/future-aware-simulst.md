---
title: Reference-free data synthesis for simultaneous speech translation
venue: CMU Language Technologies Institute, Li Lab
status: in progress
date: 2026-09-01
order: 1
summary: Translating speech while it is still being spoken forces early commitments. This work models plausible continuations of the source to decide what is safe to emit now, without needing reference translations.
authors: [Haoling Pu, and collaborators]
---

Simultaneous speech translation has to produce output before the speaker finishes. Commit too early and the translation bets on the wrong future; wait too long and latency defeats the purpose.

The idea: instead of one guess about how the sentence ends, consider many plausible continuations and only emit the target tokens that hold up across them. The training data for this behavior is synthesized without human reference translations.

Method details, numbers, and figures will appear here once the work is public.
