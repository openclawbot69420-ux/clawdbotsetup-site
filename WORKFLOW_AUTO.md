# WORKFLOW_AUTO.md

This file defines the default automated workflow rules for ONYX.

## Daily / Heartbeat cadence

- Prefer **cron** for exact schedules and offline operation.
- Prefer **heartbeat** for batched checks and low-noise continuous improvement.

## Quality gates (required)

For any change that touches code/config:

1) Keep changes small and reversible.
2) Run the relevant checks (for the website: `npm run build`).
3) If checks fail, **do not push**. Report the blocker.
4) Commit messages must be clear and scoped (e.g. `seo: ...`, `fix: ...`).

## Website hourly loop (youraiworker-site)

Goal: ship ONE small improvement per run that increases professionalism:

- design polish
- copy/positioning clarity
- SEO and metadata
- pricing clarity
- CTA placement
- credibility/trust indicators

Constraints:

- Work only in `/tmp/youraiworker-site` (or the workspace when explicitly needed).
- No secrets. No new paid services.
- Avoid em dash `—` (use hyphen `-`).

## Reporting

- Only ping Mees when something breaks, a blocker exists, or a meaningful ship landed.
- Otherwise keep it quiet.
