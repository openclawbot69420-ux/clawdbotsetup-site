# Delivery SOP (v1) — clawdbotsetup

Goal: consistent, client-friendly delivery that avoids failed setups + angry clients.

## Base package (anchor)
- €1k one-time setup fee includes **1 agent**
- Security baseline: **Tailscale**
- Channel baseline: **Telegram**
- Includes: handover (30 min), daily backups, 48h warranty + 2 weeks break-fix (business hours)

## Checklist

### 0) Pre-sales intake (20–45 min)
- [ ] Pick 1 workflow (one team / one process)
- [ ] Define success criteria (what “good” looks like)
- [ ] Identify inputs/outputs (channels, docs, tools)
- [ ] Risk review: data sensitivity + permissions
- [ ] Confirm hosting approach (client VPS vs we provision)

### 1) Access & provisioning
- [ ] VPS provisioned (Hostinger/Hetzner/DO)
- [ ] Tailscale: invite + confirm owner/offboarding rules
- [ ] Secrets policy: no keys in chat, store in config/secret store

### 2) Install baseline stack
- [ ] Docker + basic hardening
- [ ] OpenClaw installed + gateway running
- [ ] Model routing configured (Opus planning, Codex execution)
- [ ] Audio STT enabled (Groq) if desired

### 3) Configure the agent
- [ ] Implement the chosen starter agent (or custom workflow)
- [ ] Add required integrations (start minimal)
- [ ] Add logging + acceptance tests

### 4) QA / UAT
- [ ] Run test cases with real examples
- [ ] Confirm failure modes + escalation path
- [ ] Confirm performance + reliability

### 5) Go-live + handover (client present)
- [ ] 30-min walkthrough
- [ ] Deliver handover pack (Quickstart + admin notes)
- [ ] Confirm contact/support channel

### 6) Stabilization
- [ ] 48h warranty window started
- [ ] 2-week break-fix support window
- [ ] Daily backups verified + restore test scheduled

## Scope guardrails (anti-scope-creep)
- Any deep custom API integration, WhatsApp, big KB, multilingual, or regulated workflows → scoped + quoted as add-on.
- Warranty = break-fix within agreed scope (no new features).
