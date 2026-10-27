# Publishing checklist for the current GitHub account

Target account: `InteractiveRoboticsHassen`  
Target repository: `interactiveroboticshassen.github.io`  
Target website: `https://interactiveroboticshassen.github.io/`

1. Extract this ZIP archive.
2. Open the existing `InteractiveRoboticsHassen/interactiveroboticshassen.github.io` repository.
3. Replace the old repository contents with the extracted contents. Do not upload the ZIP itself or an enclosing folder.
4. Confirm these items are at repository root: `_config.yml`, `_layouts/`, `_includes/`, `_data/`, `assets/`, `index.html`, `members.html`, and `.github/workflows/deploy-pages.yml`.
5. Commit all changes to the `main` branch.
6. In **Settings → Pages**, select **GitHub Actions** as the source.
7. In **Actions**, open **Deploy Jekyll site to GitHub Pages** and confirm both the build and deploy jobs succeed.
8. Open the target website and verify `/members.html` and `/resources.html`.

The address `https://airlabhassen.github.io/` will only work if a GitHub user or organization named `AIRLabHassen` owns a repository named `AIRLabHassen.github.io`.
