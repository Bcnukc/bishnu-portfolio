# Bishnu K.C. — Portfolio

Next.js 15, React 19, TypeScript, GSAP / ScrollTrigger, and Lenis. The design follows the supplied Simone Giussani reference with self-hosted Syne and Outfit fonts, a mint light-column hero, an asymmetric content grid, scroll-expanding projects, and a compact menu.

## Develop and preview

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production output is static:

```sh
npm run build
npm start
```

The production preview serves `out/`. Development uses `.next/`; builds use `.next-build/` so building does not interrupt the development server.

## Content

- `lib/site.ts`: contact information, experience, and expertise.
- `lib/projects.ts`: project descriptions and case studies.
- `app/page.tsx`: hero, about, services, selected work, and contact.
- `app/about/page.tsx`: biography, portrait, experience, and education.
- `components/ProjectPreview.tsx`: illustrative project previews, not screenshots of deployed products.
- `components/Contact.tsx`: validates the fields and opens a prefilled email draft. It does not send or store submissions.
- `app/globals.css`: shared design tokens and responsive styles.
- `public/fonts/`: self-hosted webfonts, with their OFL licenses.

The menu uses a native dialog for focus management, supports Escape and keyboard tabs, and prevents background scrolling. Motion respects the reduced-motion preference.

## Add a project

Add the record to `lib/projects.ts`, create its route under `app/work/`, and add a preview in `components/ProjectPreview.tsx`.

## Hosting

`.openai/hosting.json` identifies the private Sites project and the static export directory. Keep project IDs and access settings intact when updating.
