# A&G Business & Technology — Digital Business & Technology Solutions

A responsive English-language website for a founder-led business services and technology solutions team. The site uses only HTML5, CSS3 and vanilla JavaScript, with no backend, database, package installation, paid library or build process.

## Project structure

```text
.
├── index.html
├── README.md
├── .nojekyll
└── assets
    ├── css/style.css
    ├── js/content.js
    ├── js/main.js
    └── images
        ├── favicon.png
        ├── logo.png
        ├── logo2.png
        ├── og-image.svg
        ├── profile-dung-placeholder.jpeg
        ├── profile-gizzle.png
        └── projects/
```

All paths are relative, so the site can run in a GitHub Pages repository subpath.

## Preview locally

From the repository root, run:

```bash
python3 -m http.server 5500
```

Open <http://localhost:5500> in a browser. Stop the server with `Ctrl+C`. You can also open `index.html` directly, although a local HTTP server more closely matches GitHub Pages.

## Edit website content

Routine content is stored in [`assets/js/content.js`](assets/js/content.js). Edit this one file to update:

- business name, title, description and hero content;
- navigation and section text;
- target audiences and Why Choose A&G value statements;
- team members, roles, biographies, images and links;
- Gizzle and Andrew Leba service profiles, expertise groups and credentials;
- projects, categories, descriptions, deliverables, tools and repository visibility;
- portfolio projects and the collaborative working process;
- email, Calendly, LinkedIn, GitHub, WhatsApp and location;
- canonical URL and structured-data setting.

Search for `EDIT HERE` to locate missing or unconfirmed information. Preserve quotes, brackets and commas when editing JavaScript.

The Leba Medical ERP repository URL is stored in `content.js`, but `showRepository` is initially `false`. After confirming that the repository is public, change it to:

```javascript
showRepository: true
```

Contact methods without real information are hidden. WhatsApp must use digits only, including the country code, without `+`, spaces or punctuation.

## Information still needed

- Gizzle's real Calendly URL, if scheduling should be shown
- Approved LinkedIn URLs and optional WhatsApp details
- Approved images for the six business service samples
- Confirmation that the Leba Medical ERP repository is public

The current Gizzle and Andrew Leba portrait files are present and used by the website. The header uses the supplied favicon mark beside the HTML text “A&G Business & Technology”.

No client names, testimonials, certificates, commercial results or statistics should be added without factual evidence and permission.

## Replace images

1. Put approved images inside `assets/images/` or `assets/images/projects/`.
2. Optimize photographs and screenshots as WebP, JPEG or PNG.
3. Update the appropriate `image` and `imageAlt` fields in `assets/js/content.js`.
4. Use an accurate alt description; do not describe content that is not visible.

Suggested sizes:

- Portraits: about 800 × 900 pixels
- Project screenshots: about 1200 × 780 pixels
- Open Graph image: 1200 × 630 pixels

Add an approved PNG or JPEG sharing image before restoring an `og:image` value in `index.html`. Do not publish confidential internal data, employee details, client logos or unapproved screenshots.

## Commit and push

Review changes before committing:

```bash
git status
git diff
git add index.html README.md .nojekyll assets
git commit -m "Build services portfolio website"
git push origin main
```

Adjust the branch name if the repository does not use `main`. Never commit passwords, private keys, access tokens, API keys, `.env` files or confidential customer data.

## Publish with GitHub Pages

1. Push the project to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the publishing branch (usually `main`) and `/ (root)`.
6. Save and wait for the deployment to complete.

For a normal project repository, the expected URL has this form:

```text
https://lebad280324.github.io/REPOSITORY_NAME/
```

Do not assume the root URL `https://lebad280324.github.io/` unless the repository itself is named `lebad280324.github.io`.

The configured project URL is `https://lebad280324.github.io/our-services-website/`. If the repository path or domain changes, update `business.canonicalUrl` in `content.js` and the static canonical/Open Graph URL in `index.html`.

## Check GitHub Actions

Open the repository’s **Actions** tab after pushing. A successful Pages deployment should show a completed workflow. If it fails:

- open the failed workflow and expand the failed step;
- confirm Pages is configured for the correct branch and root directory;
- confirm `index.html` is in the repository root;
- check that the latest commit was pushed to the publishing branch.

## Troubleshooting

### GitHub Pages returns 404

- Wait several minutes after the first deployment.
- Verify the Pages URL includes the repository name.
- Confirm `index.html` is at the repository root with the exact lowercase filename.
- Confirm the selected branch contains the latest files.
- Check the **Actions** and **Settings → Pages** status.

### CSS, JavaScript or images are missing

- Keep asset URLs relative, for example `./assets/css/style.css`.
- Do not change them to paths beginning with `/`; absolute-root paths fail in a project subpath.
- Check filename capitalization because GitHub Pages is case-sensitive.
- Open the browser developer console and Network panel to identify the missing path.
- Confirm every referenced file was committed and pushed.

### A contact or repository button is unavailable

Add the real value in `assets/js/content.js`. For repositories, also set `showRepository: true` only when public access has been verified.

## Custom domain

1. Open **Settings → Pages → Custom domain**.
2. Enter the domain you own.
3. Use the current DNS records shown by GitHub for that domain.
4. For `www` or another subdomain, a `CNAME` record normally points to `lebad280324.github.io`.
5. For an apex domain, use GitHub’s current documented IP records; do not copy old IP addresses from tutorials.
6. Wait for DNS verification, then enable **Enforce HTTPS**.
7. Update the canonical and Open Graph URLs to the final HTTPS domain.

GitHub may create a root `CNAME` file automatically. If not, create one containing only the custom domain.

## Pre-publishing checklist

- Replace all remaining `EDIT HERE` information and visible image placeholders.
- Test navigation, project dialogs and contact links with keyboard and touch.
- Test narrow mobile, tablet and desktop widths.
- Verify project statuses and distinguish planned features from completed work.
- Confirm repository visibility before enabling GitHub buttons.
- Confirm no secrets or confidential material are present.
- Set the final canonical URL and Open Graph image.
