# clawdbotsetup-site

Marketing website for the OpenClaw setup service.

## Requirements

- Node.js + npm

## Local development

```bash
npm install
npm run dev
```

Astro dev server: http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

Build output is written to `./dist/`.

## Contact form configuration

The contact form is only enabled when this environment variable is set:

- `PUBLIC_FORMSPREE_ENDPOINT`

If it is not set, the UI will show a disabled state (so we do not ship a broken form).
