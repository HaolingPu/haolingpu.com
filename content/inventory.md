# Content inventory — what goes where

Status key: **public** = can go on the site as-is · **abstract** = describe at high level only (D16) · **needs asset** = missing screenshot/link · **private** = not on site.

## Identity (`site.config.ts`)
| Field | Value | Status |
|---|---|---|
| Name | Haoling Pu | public |
| Nickname | Brian (mention once on /about, not in nav or title) | public |
| Tagline | see `brief.md` | public |
| Location | Pittsburgh, PA | public |
| Email | haolingp@andrew.cmu.edu (❓ Q8: or a personal address?) | public |
| GitHub | github.com/HaolingPu | public |
| LinkedIn | linkedin.com/in/haoling-pu | public |
| Phone | — | private (never on site) |
| Résumé PDF | `~/Desktop/New Grad Application/Resume_HaolingPu.pdf` (Aug 23 2026) | public, copy to `public/` |
| Photo | ❓ Q6 | needs asset |

## Work (`src/content/work/`)
| Entry | Dates | What the site says | Status |
|---|---|---|---|
| Google — Software Engineering Intern, Los Angeles | 05/2026–08/2026 | Built an agentic knowledge system that generates and continuously self-maintains an engineering team's knowledge base; ran as scheduled distributed jobs; productionized for cross-team use with source-cited answers. | **abstract** |
| CMU LTI, Li Lab — Research Assistant | 10/2025–present | Research on simultaneous speech translation: how a model can commit to translations before hearing the full sentence. Self-hosted GPU training/inference pipeline (vLLM, LoRA fine-tuning). | **abstract** (pipeline/tooling can be public; method stays high-level) |
| WeRide — Backend Development Intern, Shanghai | 05/2025–08/2025 | Knative cold-start 12.2 s → 1.5 s (−88%) via a service warming pool; containerized REST service with CI/CD; Prometheus/Grafana monitoring across a 120-GPU cluster. | public |
| UMSN Pregnancy App — ML Engineer Intern, Ann Arbor | 05/2024–08/2024 | Led a 6-person team on a HIPAA-compliant AI prenatal-care platform; RAG agent for personalized care summaries; Redis/JWT auth. | public |
| AVIAGE Systems — SDE Intern, Shanghai | 05/2023–08/2023 | Flight-data pipeline for 13 sensor streams; MySQL-backed REST APIs, p95 latency −42%. | public |

## Education
| Entry | Status |
|---|---|
| CMU, MS in Artificial Intelligence and Innovation, SCS, GPA 4.00, May 2027 | public |
| University of Michigan, BS Computer Science & Data Science, GPA 3.95, May 2025 | public |

## Projects (`src/content/projects/`) — ❓ Q5 decides the featured set
| Project | Proposed | Repo / demo | Status |
|---|---|---|---|
| Sparse Attention on Blackwell (NVIDIA MLSys 2026 competition) | **featured #1** | ❓ repo? | public (results are competition results, fine to show) · needs asset (perf chart) |
| Agentic team wiki (Google) | featured, abstract | none | **abstract** — one card, no repo |
| LLM Wiki (Karpathy-style, Claude-Code-driven; Meridian edition public) | **featured** | github.com/HaolingPu/llm-wiki-meridian | public |
| Hybrid RAG system (CMU ANLP) | **featured** | github.com/HaolingPu/anlp-spring2026-hw1 (fork — ❓ own repo?) | public · needs asset |
| Simultaneous MT with anticipated future signals (TAF) | featured, high-level | github.com/HaolingPu/Simultaneous-Machine-Translation-TAF | **abstract** (earlier public repo exists; keep description high-level) |
| EchoFrame — AI old-photo restoration iOS app | featured | github.com/HaolingPu/EchoFrame | public · needs asset (screenshots) |
| Open-LiveTranslate — simultaneous speech-to-speech cascade | maybe | github.com/LeiLiLab/Open-LiveTranslate (lab repo) | ❓ lab permission |
| PetFinder Pro — lost-pet finder web app | secondary | github.com/HaolingPu/petfinder-pro | public |
| Seek global website | secondary | github.com/HaolingPu/seek_global_website | public · ❓ what is it? |
| WeRide cold-start warming pool | as a work highlight, not a project | — | public |
| Distributed MapReduce, Dog-breed classifier, ICU mortality (from 2025 draft site) | archive / omit | — | ❓ keep any? |

## Research (`src/content/research/`)
| Entry | What the site says | Status |
|---|---|---|
| Simultaneous speech translation (CMU Li Lab, EMNLP 2026 target) | Problem: translating speech while it is still being spoken forces early commitments. Idea (one sentence): use plausible continuations of the source to decide what is safe to emit now. Status badge: "in progress". No numbers. | **abstract** |
| Sparse attention kernel (NVIDIA MLSys 2026) | Full competition write-up allowed. | public |

## Writing (`src/content/writing/`)
None at launch (D14). Section hidden from nav until the first post exists.

## About (`/about`) — ❓ Q7
- Story arc to confirm: Shanghai → Michigan (Ann Arbor) → CMU (Pittsburgh) → Google (LA) → back to CMU.
- Placeholders until Q7 answered: hobbies, current obsessions, music/books/games, keyboard/editor facts.

## Assets needed (`assets-raw/`)
- [ ] headshot (Q6)
- [ ] sparse-attention perf chart or table screenshot
- [ ] EchoFrame app screenshots (from repo README)
- [ ] llm-wiki-meridian graph-view screenshot
- [ ] PetFinder Pro screenshot
- [ ] logos: CMU, UMich, Google, WeRide, NVIDIA (monochrome SVG)
