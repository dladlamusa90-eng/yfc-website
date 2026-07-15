# Youth For Christ International (YFC)

Static ministry website for evangelism, discipleship, and mobilization.

## Project Structure

- `index.html` — home (hero, video programs, branches, gallery, CTA)
- `about/index.html` — mission, vision, ministry snapshot
- `yfc-culture/index.html` — YFC culture values
- `programs/daily-juice.html` — all programs overview
- `programs/bible-study.html`, `programs/leadership.html`, `programs/jrt.html`
- `events/index.html` — branch events calendar (Firebase Firestore)
- `yfc-partners/index.html` — global calendar (Firebase Firestore)
- `atmosphere-album.html` — photo albums (static + Firebase gallery/banners)
- `get-involved/membership.html`, `get-involved/merchandise.html`
- `giving/index.html` — donation details
- `contact/index.html`, `privacy-policy/index.html`
- `assets/css/style.css` — single shared stylesheet
- `assets/js/script.js` — shared nav/gallery/album logic
- `firestore.rules` — Firestore security rules (deploy with `firebase deploy --only firestore:rules`)

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
