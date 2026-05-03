# Youth For Christ International (YFC)

Static ministry website for evangelism, discipleship, and mobilization.

## Project Structure

- `index.html`
- `about/index.html`
- `programs/daily-juice.html`
- `programs/bible-study.html`
- `programs/leadership.html`
- `programs/jrt.html`
- `events/index.html`
- `get-involved/membership.html`
- `get-involved/merchandise.html`
- `giving/index.html`
- `contact/index.html`
- `assets/css/style.css`
- `assets/js/script.js`

## Local Preview

Open `index.html` directly in a browser, or serve the folder using any static server.

## Deploy Option 1: GitHub Pages

1. Create a GitHub repository and push this project to the repository root.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, set:
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Save and wait for the site URL to be generated.

The `.nojekyll` file is included to ensure static asset paths are served as-is.

## Deploy Option 2: Netlify

1. Create a new site in Netlify and connect your GitHub repository.
2. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
3. Deploy.

`netlify.toml` is included with static publish settings and security headers.

## Post-Deploy Checklist

1. Replace placeholder social links (`#`) with official channel URLs.
2. Replace placeholder media blocks with real YouTube embeds.
3. Add real merchandise images under `assets/images/`.
4. Verify all forms are connected to a backend or form service.
