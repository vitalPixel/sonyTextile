# Working on this site

- Keep the site static: semantic HTML and plain CSS, with no framework, build system or package dependencies. Add vanilla JavaScript only when essential, and preserve core content and navigation without it.
- Prioritize accessible, responsive markup, fast loading and search indexing. Keep titles, descriptions, canonical URL, sitemap and robots file accurate; use descriptive image alternatives and dimensions.
- Preserve the design, verified business details and illustrative-image context described in README.md. Avoid new external fonts, trackers and unnecessary assets.
- Preview from the repository root using `python3 -m http.server 8000`. Check the relevant desktop and mobile views, keyboard navigation, links and image loading. Netlify stages the static files in `dist` for deployment; keep that step dependency-free.

## Change and release workflow

1. Make each new set of changes on a new branch and open a draft pull request targeting the production branch.
2. Give the user the Netlify Deploy Preview link for that pull request. Use the link reported by Netlify when available; its usual form is `https://deploy-preview-<PR-number>--<netlify-site-name>.netlify.app/`. Do not guess the site name or claim the preview is live without verification.
3. If the user requests further changes, commit and push them to the same branch to update the pull request and its preview.
4. Once the user is happy with the changes, mark the pull request ready for review.
5. Tell the user that a repository maintainer must merge the pull request before the changes reach production. Do not merge it yourself unless the user explicitly requests it.
