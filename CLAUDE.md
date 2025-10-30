# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build static site (outputs to `/out` directory)
- `npm run lint` - Run ESLint on the codebase
- `cd out && python3 -m http.server 8000` - Serve built static site locally

### Testing Static Build Locally
After running `npm run build`, you can test the static export by serving the `/out` directory with any static file server.

## Project Architecture

### Core Technology Stack
- **Next.js 16** with App Router and static export configuration
- **React 19** with TypeScript for type safety
- **TailwindCSS 4** with custom cosmic theme styling
- **next-intl 4.4** for bilingual English/Chinese internationalization

### Internationalization Architecture
This is a **bilingual academic event website** with static i18n setup:

- **Locale routing**: `/en/` and `/zh/` routes via `[locale]` dynamic parameter
- **Static generation**: Uses `generateStaticParams()` in layout to pre-build all language versions
- **Translation files**: `messages/en.json` and `messages/zh.json` contain all text content
- **Configuration**: `src/i18n.ts` manages locale-specific message loading
- **No middleware**: Configured for static export without server-side routing

### Static Site Generation (SSG)
The project is configured for static export in `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
};
```

### Directory Structure
```
src/app/[locale]/           # All pages are locale-aware
├── contact/               # Contact information page
├── program/               # Event schedule page
├── registration/          # Registration form page
├── venue/                 # Venue information page
├── layout.tsx             # Locale-specific layout with Navigation/Footer
└── page.tsx               # Homepage

src/components/
├── Navigation.tsx         # Responsive nav with mobile menu and language toggle
└── Footer.tsx             # Site footer with event details

src/
├── i18n.ts               # Internationalization configuration
└── middleware.ts         # Locale routing middleware
```

## Content Management

### Adding/Modifying Text Content
1. **English content**: Edit `messages/en.json`
2. **Chinese content**: Edit `messages/zh.json`
3. **Structure**: Translations are organized by page sections (nav, home, program, registration, etc.)
4. **Rebuild**: Run `npm run build` after content changes

### Adding New Pages
1. Create page directory in `src/app/[locale]/new-page/`
2. Add `page.tsx` with proper internationalization hooks
3. Add translations to both `messages/en.json` and `messages/zh.json`
4. Update navigation in `src/components/Navigation.tsx` if needed

### Design System
The project uses a **cosmic astronomy theme**:
- Dark gradients (slate-900 to purple-900)
- Animated starry backgrounds with CSS animations
- Blue/purple accent colors
- Glassmorphism effects with backdrop-blur
- Geist font family for typography

## Important Implementation Notes

### Internationalization Pattern
All pages should use the `next-intl` pattern:
```typescript
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('PageSection');
  return <div>{t('key')}</div>;
}
```

### Static Export Considerations
- All images must use `unoptimized: true` in next.config.ts
- No server-side API routes (use static data only)
- All paths must be deterministic at build time
- External links and forms should target external services

### Responsive Design
- Mobile-first TailwindCSS approach
- Navigation collapses to hamburger menu on mobile
- Grid layouts with responsive breakpoints
- All components tested across device sizes

### Path Aliases
The project uses `@/*` for clean imports mapping to `./src/*`:
```typescript
import Navigation from '@/components/Navigation';
import { routing } from '@/i18n';
```

### Event-Specific Context
This is a **PKU + THU Joint Postdoc Forum in Astronomy and Astrophysics 2025**:
- Academic research presentation focus
- Limited to 40 participants
- Two-day event across two universities
- Professional academic audience
- Registration and program management needs