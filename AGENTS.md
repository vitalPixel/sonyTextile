# Working on this site

- Keep the site static: semantic HTML and plain CSS, with no framework, build system or package dependencies. Add vanilla JavaScript only when essential, and preserve core content and navigation without it.
- Prioritize accessible, responsive markup, fast loading and search indexing. Keep titles, descriptions, canonical URL, sitemap and robots file accurate; use descriptive image alternatives and dimensions.
- Preserve the design, verified business details and illustrative-image context described in README.md. Avoid new external fonts, trackers and unnecessary assets.
- Preview from the repository root using `python3 -m http.server 8000`. Check the relevant desktop and mobile views, keyboard navigation, links and image loading. Netlify stages the static files in `dist` for deployment; keep that step dependency-free.
