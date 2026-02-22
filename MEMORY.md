# MEMORY.md - Long-Term Memory

## User Preferences

- Prefers **Opus 4.6** as the default planning/reasoning model.
- Wants **cost-aware model routing**:
  - Start tasks with Opus for planning/approach.
  - Use cheaper models for lower-leverage execution work.
  - Prefer **openai-codex/gpt-5.2** for coding tasks and straightforward implementation steps.
- Wants explicit model transparency in responses, e.g.:
  - "We did Opus for this"
  - "We did Codex for this"
- Wants future tasks to follow this model-selection policy by default.

## Working Style

- Values clear execution and cost efficiency.
- Wants delegation of lower-level tasks to sub-agents where useful.
