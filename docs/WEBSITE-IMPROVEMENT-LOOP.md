# Website Improvement Loop (YourAIWorker.nl)

Goal: ship coherent, sales-oriented improvements without copy drift or regressions.

## Rules

- NL-first, premium/corporate tone.
- Never use the em dash character in website copy. Use "-".
- No claim unless we can deliver it (OpenClaw feature or our service).
- Build must pass: `npx next build`.
- Prefer fewer, coherent pushes (batch changes).

## Daily loop (when actively working)

1) Conversion
   - Hero clarity, CTA flow, reduce friction.

2) Trust
   - Security model, access model, what we need from client.

3) Proof
   - Case studies (anonymized ok), metrics with disclaimers.

4) SEO (NL)
   - Unique titles/descriptions, internal linking, schema, sitemap.

5) Consistency audit
   - Terminology and promises match across pages.

## Release checklist

- [ ] `git status` clean
- [ ] `npx next build`
- [ ] Check OG image references (always `/og.png`)
- [ ] No placeholders (KvK/BTW) unless real
- [ ] No em dashes
- [ ] Deploy ok on Vercel
