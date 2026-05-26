# LEMA Lab Website

This repository contains the Quarto website for LEMA Lab, Learning for Embodied Minds and Agents, at the National University of Singapore.

The site is intentionally lightweight: two pages, static HTML output, custom SCSS styling, placeholder content, and no backend.

## Install Quarto

Install Quarto from the official website:

https://quarto.org/docs/get-started/

After installation, confirm that Quarto is available:

```bash
quarto --version
```

## Preview Locally

From the repository root, run:

```bash
quarto preview
```

Quarto will start a local preview server and print a browser URL.

## Render the Site

To build the static site:

```bash
quarto render
```

The rendered HTML will be written to `_site/`.

## Editing Content

- Homepage content: edit `index.qmd`
- Contact and recruiting content: edit `contact.qmd`
- Site navigation and Quarto settings: edit `_quarto.yml`
- Visual styling: edit `styles.scss`
- Publication metadata placeholders: edit `publications.bib`
- Image replacement notes: see `images/README.md`

## Replacing Images

The first version uses CSS-based placeholders, so there are no required image assets.

When real images are available, place them under `images/` and reference them from the relevant `.qmd` file. Recommended future assets include:

- PI profile photo
- Team member photos
- Lab, campus, robot, or project images
- Project thumbnails

## GitHub Pages Deployment

This repository can be deployed to GitHub Pages after rendering with Quarto.

Common options include:

1. Render locally with `quarto render` and publish the generated `_site/` content through a GitHub Pages workflow.
2. Add a GitHub Actions workflow that installs Quarto, runs `quarto render`, and deploys `_site/` to Pages.
3. Use Quarto's publishing tools later if desired.

Before public launch, replace image assets and any remaining placeholder lab-specific text.
