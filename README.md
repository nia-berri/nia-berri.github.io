# nia-berri.github.io

Personal data science portfolio — single-page site built with plain HTML/CSS/JS, deployed via GitHub Pages.

**Live site:** https://nia-berri.github.io

## Structure

```
index.html      Page content and structure
styles.css      All styling (design tokens at the top)
script.js       Scroll-reveal for project cards
cv/             Place your CV PDF here as Damonia_Berrian_CV.pdf
```

## Before deploying

1. Replace the placeholder email in `index.html` (`mailto:your.email@example.com`) with your real address.
2. Replace the placeholder LinkedIn URL with your real profile link.
3. Drop your CV PDF into `cv/` named `Damonia_Berrian_CV.pdf` (or update the link in `index.html` to match your filename).
4. Confirm the two project repo links point to the right places:
   - `github.com/nia-berri/Insurance-Coverage`
   - `github.com/nia-berri/CDC-Mortality`

## Deploying

This repo must be named exactly `nia-berri.github.io` on GitHub — that naming convention is what triggers automatic Pages publishing at the root domain, no settings changes needed.

```bash
git remote add origin https://github.com/nia-berri/nia-berri.github.io.git
git push -u origin main
```

Give it a minute or two after the first push, then visit https://nia-berri.github.io
