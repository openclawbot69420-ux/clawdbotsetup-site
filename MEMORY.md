# MEMORY.md - Long-Term Memory

## People

- **Mees** — primary human. Entrepreneur based in Amsterdam. Building an AI agent business using OpenClaw.
- **Tieko** — Mees's brother. Setting up OpenClaw together with Mees.

## The Mission

- Build a company that helps businesses set up OpenClaw agents
- Primary motivation: earn money and become financially free (building with Tieko)
- Mees is learning as he goes — explain everything clearly
- This is the beginning — we're in setup/foundation phase

## User Preferences

- Prefers **Opus 4.6** as the default planning/reasoning model
- Wants **cost-aware model routing**:
  - Start tasks with Opus for planning/approach
  - Use cheaper models for lower-leverage execution work
  - Prefer **openai-codex/gpt-5.2** for coding tasks and straightforward implementation
- Wants explicit model transparency: "We did Opus for this" / "We did Codex for this"
- Wants future tasks to follow this model-selection policy by default
- Always be detailed — explain steps clearly since this is new territory
- Be proactive — check things, suggest stuff, don't wait to be asked
- Continuously update USER.md, MEMORY.md, and IDENTITY.md as we learn more

## Working Style

- Values clear execution and cost efficiency
- Wants delegation of lower-level tasks to sub-agents where useful
- Flexible schedule — no fixed morning/night routine
- Uses VS Code as primary editor
- Some coding experience but relies heavily on AI assistance

## Setup History (2026-02-22)

- Configured Opus 4.6 as default model
- Set up fallbacks: openai-codex/gpt-5.2 + openai-codex/gpt-5.3-codex
- Created `switch-model` command (~/bin/) for quick model switching
- Enabled Groq for free speech-to-text transcription
- Installed GitHub CLI (`gh`) and authenticated as openclawbot69420-ux
- Enabled coding-agent skill with Codex CLI
- Enabled QMD memory backend (BM25 + vectors + reranking)
- Enabled compaction.memoryFlush + experimental sessionMemory
- Telegram bot connected (@goonbottttttt_bot) — primary chat channel (paired Telegram)
- Kimi channel connected
