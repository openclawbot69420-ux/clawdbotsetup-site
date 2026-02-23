# Handover Pack — {{CLIENT_NAME}}

**Project:** {{PROJECT_NAME}}  
**Delivery date:** {{YYYY-MM-DD}}  
**Version:** v1.0  
**Primary channel:** {{PRIMARY_CHANNEL}} (default: Telegram)  

---

## 1) Quickstart (5 minutes)

### What this is
You now have a working automation agent for **one workflow** (as agreed during intake). The agent runs on a server (VPS) and can be reached through your chosen channel.

### How to use it (end users)
1. Open **{{PRIMARY_CHANNEL}}** and message: **{{AGENT_CONTACT_OR_BOT_NAME}}**
2. Use one of these starter commands / prompts:
   - **“{{PROMPT_EXAMPLE_1}}”**
   - **“{{PROMPT_EXAMPLE_2}}”**
   - **“{{PROMPT_EXAMPLE_3}}”**
3. If the agent asks a clarification question, answer it in the same thread/chat.

### What to do if it looks stuck
- Wait **2–3 minutes** (some tasks take time).
- If nothing happens:
  1. Send: **“status?”**
  2. If still no response, contact support (see **Escalation**).

---

## 2) What the agent does (scope)

### Workflow covered
- **Workflow name:** {{WORKFLOW_NAME}}
- **Goal / success criteria:** {{SUCCESS_CRITERIA}}

### Inputs
- Messages via: {{PRIMARY_CHANNEL}}
- Other inputs: {{INPUTS_LIST}}

### Outputs
- Where results appear: {{OUTPUTS_LIST}}
- Typical turnaround: {{TYPICAL_TAT}}

### What it will *not* do (guardrails)
To keep reliability high, this delivery is intentionally scoped. Items below are **out of scope unless separately agreed/quoted**:
- Deep custom API integrations
- WhatsApp automations
- Large knowledge bases / large document ingestion
- Multilingual expansion
- Regulated workflows or special compliance requirements

---

## 3) “How to talk to the agent” (best practices)

### Good prompts
- Include the **objective** and the **context**.
- Provide examples of what “good” looks like.
- If it needs access to a file/link, paste it or attach it.

**Examples:**
- “{{GOOD_PROMPT_EXAMPLE_1}}”
- “{{GOOD_PROMPT_EXAMPLE_2}}”

### Avoid
- Vague requests (“handle this” without context)
- Sensitive secrets in chat (API keys, passwords)

---

## 4) Admin notes (for your IT/Admin owner)

### Hosting
- **Server/VPS provider:** {{VPS_PROVIDER}}
- **Server hostname:** {{SERVER_HOSTNAME}}
- **Server region:** {{SERVER_REGION}}
- **Server purpose:** OpenClaw gateway + agent runtime

### Key services (baseline)
- **OpenClaw Gateway:** running on the VPS
- **Runtime:** Docker-based (baseline)

### Configuration & secrets
- Secrets are **not** stored in chat.
- Secrets/config live in: {{SECRETS_LOCATION}}
- Owner/offboarding policy: {{OFFBOARDING_POLICY_NOTES}}

### Observability
- Logs location / viewer: {{LOGS_LOCATION}}
- What’s logged: high-level task events + errors (no sensitive payloads unless explicitly enabled)

---

## 5) Access (Tailscale)

Security baseline for administration is **Tailscale**.

### Who has access
- **Tailscale org / tailnet owner:** {{TAILNET_OWNER}}
- **Admin users (names/emails):** {{TAILSCALE_ADMINS}}
- **Vendor/admin access:** {{VENDOR_ACCESS_RULE}}

### How to access the server
1. Install Tailscale: <https://tailscale.com/download>
2. Sign in with your org account
3. Confirm the VPS appears as: **{{TAILSCALE_DEVICE_NAME}}**
4. Admin via SSH:
   - `ssh {{SSH_USER}}@{{TAILSCALE_IP_OR_HOSTNAME}}`

### Offboarding / revoking access
- Remove a user/device in Tailscale admin console
- Rotate credentials/secrets listed in **Secrets & Integrations** (below)

---

## 6) Backups & recovery

### What is backed up
- Agent configuration and runtime state: {{BACKUP_CONTENTS}}
- Frequency: **daily**

### Where backups are stored
- Backup destination: {{BACKUP_DESTINATION}}
- Retention: {{BACKUP_RETENTION}}

### Restore process (high level)
1. Provision a replacement VPS (if needed)
2. Re-attach Tailscale
3. Restore the latest backup
4. Validate using the **Acceptance Checklist**

### Restore drill
- Scheduled restore test: {{RESTORE_TEST_DATE}}

---

## 7) Warranty & support

### Included with the base delivery
- **48-hour warranty** from go-live: we fix breakages related to the delivered scope.
- **2 weeks break-fix support** (business hours): fixes for issues within the agreed workflow scope.

### Not included
- New features, scope expansion, new channels, or major new integrations.

### Support hours
- {{SUPPORT_HOURS}}

---

## 8) Escalation (when you need help fast)

### Support contacts
- **Primary support contact:** {{SUPPORT_NAME}} — {{SUPPORT_EMAIL}} — {{SUPPORT_PHONE_OR_CHAT}}
- **Secondary (backup) contact:** {{SECONDARY_SUPPORT_NAME}} — {{SECONDARY_SUPPORT_EMAIL}}

### How to report an issue
Please include:
- What you asked the agent to do
- The full chat transcript (or screenshots)
- Approximate time (with timezone)
- Any relevant file/link references

### Severity levels
- **SEV1 (service down):** agent unreachable, repeated failures, urgent business impact
- **SEV2 (major):** frequent errors, degraded performance
- **SEV3 (minor):** cosmetic issues, small prompt tweaks

Target response times: {{SLA_NOTES}}

---

## 9) Secrets & integrations inventory

> Keep this section up to date. It’s the fastest way to manage risk and offboarding.

- **Telegram bot / channel:** {{TELEGRAM_DETAILS}}
- **Model provider / routing:** {{MODEL_ROUTING_DETAILS}}
- **STT (optional, Groq):** {{STT_DETAILS}}
- **Other integrations:**
  - {{INTEGRATION_1}}
  - {{INTEGRATION_2}}

---

## 10) Acceptance checklist (sign-off)

Use this to confirm delivery is complete and ready for handover.

### Functional tests
- [ ] Agent reachable in {{PRIMARY_CHANNEL}}
- [ ] Agent successfully runs workflow: {{WORKFLOW_NAME}}
- [ ] Test case #1 passes: {{UAT_TEST_1}}
- [ ] Test case #2 passes: {{UAT_TEST_2}}
- [ ] Failure mode behaves as expected (clear error + next step)

### Admin & security
- [ ] Tailscale access confirmed for client admins
- [ ] Vendor access rules documented
- [ ] Secrets are stored in the agreed location (not in chat)

### Backups
- [ ] Daily backups enabled
- [ ] Backup destination + retention documented
- [ ] Restore test scheduled

### Support
- [ ] Warranty start time confirmed: {{WARRANTY_START}}
- [ ] Break-fix support window confirmed: {{BREAKFIX_WINDOW}}
- [ ] Escalation path shared with client

### Sign-off
- **Client representative:** {{CLIENT_SIGNOFF_NAME}} ({{CLIENT_SIGNOFF_ROLE}})
- **Signature / confirmation:** {{SIGNOFF_METHOD}}  
- **Date:** {{SIGNOFF_DATE}}
