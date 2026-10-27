# AIRLab Hassen website

This repository contains the AIRLab Hassen GitHub Pages website for:

```text
https://interactiveroboticshassen.github.io/
```

It uses Jekyll's built-in layout, include, and data features so shared content is defined once instead of copied into every page.

## Shared architecture

The reusable site shell is organized as follows:

- `_layouts/default.html` — the complete page shell used by every page.
- `_includes/head.html` — shared metadata, stylesheet loading, and optional MathJax setup.
- `_includes/header.html` — site title and primary navigation.
- `_includes/sidebar.html` — the shared Hassen Nigatu profile card.
- `_includes/footer.html` — the shared footer and footer navigation.
- `_data/navigation.yml` — the single source for header links, footer links, and sitemap entries.
- `_data/profile.yml` — the single source for sidebar identity, description, and profile links.
- `_data/members.yml` — the single source for the PI and all member profiles.
- `_data/lab_resources.yml` — the single source for laboratory-equipment cards.
- `assets/css/styles.css` — the global visual system.
- `assets/css/pages/` — page-specific styles extracted from the original pages so their appearance remains unchanged.

Each root HTML file now contains only its front matter and page-specific main content. Updating the navigation, sidebar, footer, global metadata shell, members, or equipment no longer requires editing every page.

## Add or update a member

1. Put the member photo in `assets/img/`.
2. Open `_data/members.yml`.
3. Add one record under `members:` using the commented example.
4. Commit and deploy. The Members page generates the profile card automatically.

Each member record supports:

- name
- role
- photo and alternative text
- research direction
- email
- profile explanation

The PI profile is maintained in the same file under `principal_investigator:`.

## Update laboratory resources

Edit `_data/lab_resources.yml`. Each resource record supplies the name, image, image alternative text, category, and description. The Resources page generates the equipment cards automatically.

The supplied assets are stored at:

- `assets/img/bambu-lab-h2d.png`
- `assets/img/table-cnc-machine.png`

## Change global navigation or profile information

- Edit `_data/navigation.yml` once to update the header, footer, and sitemap.
- Edit `_data/profile.yml` once to update the shared sidebar.
- Edit `_config.yml` once if the production domain changes.
- Edit `_includes/` only when the shared page shell itself needs to change.

## Local preview

Jekyll must process the shared layout before the site can be previewed. One simple local setup is:

```bash
gem install jekyll webrick
jekyll serve
```

Then open:

```text
http://127.0.0.1:4000/
```

Do not preview the source by opening an HTML file directly; the Jekyll includes will not be expanded in that mode.

## Deployment

The included `.github/workflows/deploy-pages.yml` workflow builds the Jekyll source and deploys the generated site to GitHub Pages whenever `main` is updated.

This package is configured for the existing GitHub account `InteractiveRoboticsHassen`. Upload the extracted project contents to the repository named `interactiveroboticshassen.github.io`. In the repository settings, select **Settings → Pages → Source → GitHub Actions**.

See `DEPLOYMENT.md` for the complete publishing checklist.
