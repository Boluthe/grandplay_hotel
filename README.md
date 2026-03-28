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

## Deploy Checklist

- [ ] Confirm WhatsApp number is correct in scripts/main.js.
- [ ] Confirm canonical and Open Graph URL values in index.html.
- [ ] Confirm contact info (address, phone, email) is final.
- [ ] Confirm all CTA buttons open the expected WhatsApp intent.
- [ ] Confirm promotions and rooms cards look correct on mobile.
- [ ] Confirm gallery and 360 modal open/close properly.
- [ ] Confirm map embed points to the correct hotel location.
- [ ] Confirm no console errors on desktop and mobile.
- [ ] Confirm social preview image resolves from og:image and twitter:image.
- [ ] Confirm final site loads on the public deployed URL.

## Deploy Options

### GitHub Pages

1. Push repository to GitHub.
2. Open repository Settings.
3. Open Pages.
4. Source: Deploy from a branch.
5. Branch: main, folder: root.
6. Save and wait for publish URL.

GitHub Pages custom domain checklist:

1. Add `CNAME` file at repository root with `grandplayhotel.com`.
2. Keep custom domain in GitHub Pages settings set to `grandplayhotel.com`.
3. Configure DNS records:
	- A: `185.199.108.153`
	- A: `185.199.109.153`
	- A: `185.199.110.153`
	- A: `185.199.111.153`
	- CNAME (www): `boluthe.github.io`
4. If using Cloudflare, set these records to DNS only (not proxied) until certificate is issued.
5. Wait up to 24 hours, then enable Enforce HTTPS in GitHub Pages settings.

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
