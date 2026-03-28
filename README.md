# Grandplay Hotel

Single-page hotel marketing website focused on conversions and mobile usability.

## Tech

- HTML
- CSS
- Vanilla JavaScript

## Project Structure

- index.html: Page structure and content blocks
- styles/main.css: Design system, layout, responsive behavior
- scripts/main.js: Interactions, menu behavior, WhatsApp deep-link logic
- assets/images: Uploaded image assets used by cards and gallery

## Key Features

- Sticky top navigation with mobile hamburger menu
- Hero section with clear booking action
- Promotions cards with badges and dual actions
- Rooms cards with availability labels and 360 tour placeholder modal
- Pool, dining, gallery, reviews, event form, contact map, and footer
- Mobile responsive layout across all sections

## Local Run

Option 1

1. Open terminal in project root
2. Run: npx serve . -l 5500
3. Open: http://localhost:5500

Option 2

1. Open terminal in project root
2. Run: python -m http.server 5500
3. Open: http://localhost:5500

## Final Pre-Deploy Edits

1. Set your production WhatsApp number in scripts/main.js.
2. Update canonical and social URL metadata in index.html.
3. Update address, phone, and email in the contact section.
4. Replace 360 tour placeholders with real links when available.
5. Review all CTA labels and booking messages.

## Deploy Options

### GitHub Pages

1. Push repository to GitHub.
2. Open repository Settings.
3. Open Pages.
4. Source: Deploy from a branch.
5. Branch: main, folder: root.
6. Save and wait for publish URL.

### Netlify

1. New site from Git.
2. Connect GitHub repository.
3. Build command: leave empty.
4. Publish directory: .
5. Deploy site.

### Cloudflare Pages

1. Create new Pages project.
2. Connect GitHub repository.
3. Framework preset: None.
4. Build command: none.
5. Output directory: .
6. Deploy.

## Notes

- This is a static site with no backend requirement.
- Keep image files optimized for faster mobile load.
- If mobile sticky CTA is required, uncomment it in index.html.
