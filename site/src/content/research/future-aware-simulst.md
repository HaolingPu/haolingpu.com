---
logo: cmu
title: Reference-free data synthesis for simultaneous speech translation
venue: CMU Language Technologies Institute, Li Lab
status: in progress
date: 2026-09-01
order: 1
summary: Translating speech while it is still being spoken forces early commitments. This work models plausible continuations of the source to decide what is safe to emit now, without needing reference translations.
authors: [Haoling Pu, and collaborators]
title_zh: 面向同声传译的无参考数据合成
venue_zh: 卡内基梅隆大学语言技术研究所，Li Lab
summary_zh: 边听边译意味着必须提前做出承诺。这项工作对源语言的后续内容做多种合理预测，据此判断此刻哪些内容可以安全输出，而无需参考译文。
---

Simultaneous speech translation has to produce output before the speaker finishes. Commit too early and the translation bets on the wrong future; wait too long and latency defeats the purpose.

The idea: instead of one guess about how the sentence ends, consider many plausible continuations and only emit the target tokens that hold up across them. The training data for this behavior is synthesized without human reference translations.

Method details, numbers, and figures will appear here once the work is public.
