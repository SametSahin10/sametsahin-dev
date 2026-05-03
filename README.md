# sametsahin.dev

Static Astro site for `sametsahin.dev`, structured as a privacy-first digital garden with two
content collections:

- `src/content/tech`
- `src/content/life`

## Development

```bash
npm install
npm run dev
```

## Analytics

Google Analytics is loaded only when `PUBLIC_GA_MEASUREMENT_ID` is configured:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The site tracks page views through the Google tag and custom events for useful interactions:

- `navigation_click` for primary navigation and browse links
- `post_open` for post card opens
- `outbound_link_click` for external profile links
- `resume_open` for PDF resume opens
- `email_click` for email CTA clicks
- `theme_change` and `mobile_menu_toggle` for interface preferences

## Obsidian workflow

Point your published/exported Obsidian directory at `OBSIDIAN_PUBLISH_DIR` and sync it into the
Astro collections:

```bash
OBSIDIAN_PUBLISH_DIR=/absolute/path/to/Vault/Published npm run content:sync
```

The site uses Astro content collections and validates frontmatter in
`src/content.config.ts`, which is the current Astro convention.

## Article images

Articles support both:

- frontmatter cover images via `cover` and `coverAlt`
- inline Markdown or MDX images inside the article body

Cover images are defined relative to each content file, following Astro's content collection image support.

## Deploying to Vercel

This project uses Astro static output with the Vercel static adapter. Vercel should detect Astro
automatically during import. A plain `npm run build` produces the deployable output.
