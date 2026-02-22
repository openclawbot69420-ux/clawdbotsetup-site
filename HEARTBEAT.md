# HEARTBEAT.md

# On every heartbeat (wake-up), do a short continuous-improvement loop.
# Goal: catch mistakes early, fix root causes, and improve the system without bothering Mees unless needed.

## Continuous Improvement Loop (run each heartbeat)

1) Review recent work for mistakes / regressions
   - Scan the last ~1-2 hours of actions (commands run, config edits, model switches).
   - Look for: wrong model used, broken configs, missing commits, unsafe edits, unclear communication.

2) Parallelize fixes with sub-agents (when there is real work to do)
   - Spawn 2–4 sub-agents in parallel for independent tasks, e.g.:
     - (A) Audit configs / recent diffs
     - (B) Review logs for errors/warnings
     - (C) Check skill readiness + missing requirements
     - (D) Draft improvements to SOP/docs (offer, onboarding, support)
   - Only intervene manually if sub-agent output indicates action is required.

3) Apply improvements
   - Make small, reversible fixes (prefer edits + commits).
   - Avoid destructive commands.

4) Report only when it matters
   - If there’s a real issue that affects Mees or clients: send a short alert with the fix/plan.
   - Otherwise stay silent.
