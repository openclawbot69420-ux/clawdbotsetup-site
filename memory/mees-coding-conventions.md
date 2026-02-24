# Mees Coding Conventions (from Fusey project)

## Stack
- TypeScript strict, noUncheckedIndexedAccess
- React 19 + TanStack Start/Router/Query/Form
- Tailwind CSS 4 (CSS custom properties for design tokens)
- Radix UI components
- Zod 4 for validation
- oRPC + Kysely + PostgreSQL backend
- pnpm monorepo
- use-intl for i18n
- Vitest + Storybook for testing

## Key Conventions
- React.FC with named props interfaces, destructure from `props` param
- Arrow functions, no `function` keyword
- No abbreviations in naming
- classNames() = twMerge(clsx(...))
- Arrange-Act-Assert with exact comments
- Three-step Zod: Plain → Object → Inferred Type
- All imports use .ts/.tsx extensions
- No path aliases — use @repo/<package> or relative
- Always braces for if/for/while
- Container/UI split for data-fetching components

## File Structure
- routes/-components/ComponentName/ComponentName.tsx + .stories.tsx
- Non-route folders prefixed with `-`
