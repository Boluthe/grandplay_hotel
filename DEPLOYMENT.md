# Deployment Guide

## GitHub Repository

Repository target:

https://github.com/Boluthe/grandplay_hotel.git

## Push Workflow

1. Initialize repository if needed.
2. Add remote origin.
3. Commit all project files.
4. Push to main branch.

## Hosting Choices

### GitHub Pages

- Best when you want simple hosting from the same repo.
- Configure in repository Settings -> Pages.

### Netlify

- Easy continuous deployment from main branch.
- No build step required for this project.

### Cloudflare Pages

- Global CDN and strong free tier.
- No build step required for this project.

## Publish Settings (Static Site)

- Build command: none
- Output directory: .

## Post-Deploy Checks

1. Home page loads without console errors.
2. All nav anchors scroll correctly.
3. All booking buttons open the expected WhatsApp message.
4. Contact map and mobile menu work on phone.
5. Metadata preview appears correctly when sharing URL.
