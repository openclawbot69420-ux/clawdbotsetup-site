# HEARTBEAT.md

# On every heartbeat (wake-up), do a short continuous-improvement loop.
# Goal: catch mistakes early, fix root causes, and improve the system without bothering Mees unless needed.

## Continuous Improvement Loop (run each heartbeat)

### Mode selection (keep it adaptive)

- If Mees is actively chatting or we are mid-build: run **FAST mode** (bigger batches, more parallel agents).
- If quiet hours (23:00-08:00 CET) and no production issue: run **SAFE mode** (only audits, no big pushes).
- Always: prefer fewer, coherent pushes over micro-churn.

1) Review recent work for mistakes / regressions
   - Scan the last ~1-2 hours of actions (commands run, config edits, model switches).
   - Look for: wrong model used, broken configs, missing commits, unsafe edits, unclear communication.
   - Copy/style rule: **never use em dash “—”** in website copy; use a normal hyphen "-" instead.

   Then do a small forward-progress pass (if there is time):
   - Website: review open issues/TODOs in clawdbotsetup-site and ship one small improvement (copy/SEO/contact form, etc.).
   - Business: refine offer/SOP/docs (scope boundaries, checklist, sales copy) and commit small improvements.

2) Parallelize fixes with sub-agents (default in FAST mode)
   - Spawn 3–5 sub-agents in parallel with clear lanes:
     - (A) Website UX/copy improvements (conversion)
     - (B) SEO/metadata/internal linking (NL-first)
     - (C) Consistency + truth check (claims, pricing, security promises)
     - (D) UI polish/perf/accessibility
     - (E) Competitor/comparable research + pattern extraction
   - Gatekeeping rule: no push unless build passes + claims are deliverable.
   - Only intervene manually if sub-agent output indicates action is required.

3) Apply improvements
   - Make small, reversible fixes (prefer edits + commits).
   - Avoid destructive commands.

4) Report only when it matters
   - If there’s a real issue that affects Mees or clients: send a short alert with the fix/plan.
   - Otherwise stay silent.
