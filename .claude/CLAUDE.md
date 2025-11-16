# Portfolio 2025

Nuxt 4 + Vue 3 + TypeScript portfolio for Aloïs Heloir (Atelier Heloir).

## Tech Stack

- **Framework**: Nuxt.js v4.0.0
- **UI**: Vue 3 Composition API + TypeScript
- **Styling**: Tailwind CSS v4 + @tailwindcss/typography
- **Icons**: @nuxt/icon (UIL iconset)
- **Runtime**: Bun
- **Build**: Vite (via Nuxt)
- **Deploy**: Docker (Alpine) + GitHub Actions → ghcr.io

## Architecture

### Component Hierarchy

```
app.vue (root)
├── MainHeader
├── main
│   ├── HeroSection → SectionTemplate
│   ├── WorksSection → SectionTemplate
│   ├── TestimonialSection → SectionTemplate
│   ├── ContactSection → SectionTemplate
│   └── SectionTemplate (spacers)
└── MainFooter
```

### Key Patterns

**SectionTemplate**: Reusable wrapper for all sections
- Centered 256px bordered layout on `lg:` breakpoint
- Slot-based content injection
- Applied to Hero, Works, Testimonial, Contact

**Header/Footer**: Mirror components
- Brand "Atelier Heloir"
- Social links (GitHub, LinkedIn) with hover states
- Responsive layout

**Section Components**: Template-driven
- Minimal/no script logic
- Semantic HTML (`<section>`, `<header>`, etc.)
- Accessibility-first (aria-labels, alt text)

## Code Conventions

### Vue Components

- Use `<script setup lang="ts">` when script needed
- Prefer template-only components (no unnecessary scripts)
- Composition API only (`useHead()`, etc.)

### Styling

- **Utility-first**: Only Tailwind classes, no custom CSS
- **Responsive**: Primary breakpoint `lg:`
- **Spacing**: Consistent px-4, py-2, py-4 patterns
- **Colors**: Black/gray/white palette with hover states

### Accessibility

- Semantic HTML tags required
- `aria-label` for icon links
- `alt` attributes for images
- Proper heading hierarchy

## Development

### Setup

```bash
bun install
bun dev         # Dev server on :3000
```

### Scripts

```bash
bun dev         # Start dev server with HMR
bun build       # Build for production
bun generate    # Static generation
bun preview     # Preview production build
```

### Config

**nuxt.config.ts**:
- DevTools enabled
- @nuxt/icon module
- Tailwind via Vite plugin
- app.css imports

**app.css**:
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

## Structure

```
/
├── app.vue                     # Root with useHead metadata
├── app.css                     # Tailwind imports
├── nuxt.config.ts              # Nuxt config
├── package.json                # 5 dependencies
├── components/
│   ├── MainHeader.vue          # Header with social links
│   ├── MainFooter.vue          # Footer (mirrors header)
│   ├── SectionTemplate.vue     # Section wrapper
│   └── section/
│       ├── HeroSection.vue     # Intro + CTA buttons
│       ├── WorksSection.vue    # Employment history (5 positions)
│       ├── TestimonialSection.vue # 2-column testimonials
│       └── ContactSection.vue  # CTA with gradient
├── public/                     # Static assets (avatars, logos, favicon)
├── server/                     # Server-side code
├── Dockerfile                  # Multi-stage Bun build
├── docker-compose.yml          # Local deployment
└── .github/workflows/          # CI/CD pipeline
```

## Build & Deploy

### Docker

Multi-stage build (Alpine-based):
1. Dependencies stage (`bun install`)
2. Build stage (`bun run build`)
3. Runtime stage (serve from `.output/`)

**Entry**: `server/index.mjs`
**Port**: 3000

### CI/CD

GitHub Actions workflow pushes Docker image to `ghcr.io/aloish/portfolio-2025:main` on push to main branch.

Local deployment via docker-compose pulls pre-built image.

## Content

### Sections

- **Hero**: Introduction, role, CTA buttons
- **Works**: 5 employment positions (Ringana, Barracuda, Mantu, Epita, Padoa)
- **Testimonials**: 2 endorsements with avatars
- **Contact**: CTA section with dark gradient background

### External Links

- GitHub: github.com/aloish
- LinkedIn: linkedin.com/in/alois-heloir

## Guidelines

### Adding Components

1. Prefer wrapping in `<SectionTemplate>` for consistency
2. Keep components template-only when possible
3. Use semantic HTML tags
4. Add aria-labels for interactive elements
5. Use Tailwind utilities exclusively

### Styling

- No custom CSS classes
- Follow existing spacing patterns (px-4, py-2, py-4)
- Use `lg:` for desktop layouts
- Maintain hover states for links

### Commits

- Concise messages (sacrifice grammar for brevity per user preference)
- Recent pattern: `feat:`, `feature:`, `add`

## Stack Details

**Tech mentioned in portfolio**:
- Vue 2 → 3 migrations
- Angular, NodeJS
- C++, C#
- PostgreSQL

**Deployment**:
- Bun runtime (faster than Node)
- Alpine Linux (minimal image size)
- GitHub Container Registry
