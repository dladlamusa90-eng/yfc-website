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
- `get-involved/merchandise.html`
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

## Branch Admin Access (Firebase Auth)

Event, global-calendar, and photo-album editing requires sign-in. Each branch
has a Firebase Auth account named `<branch>@yfc-website-d5529.firebaseapp.com`
(plus `global@...` for the YFC & Partners calendar); admins only ever type
their branch code, the page supplies the email. Firestore rules
(`firestore.rules`) allow public reads but only authenticated writes.

To create the accounts or rotate codes (requires the service account key in
`C:/Users/sinen/yfc-secrets/`, which must never live inside this folder):

1. `node admin-tools/provision-admins.js` — creates/updates the branch admin
   accounts. Codes are set inside that script and never printed.
2. Push the site so the pages that use auth sign-in are live.
3. `node admin-tools/deploy-rules.js` — publishes `firestore.rules` to the
   live project (or `firebase deploy --only firestore:rules`).

`admin-tools/` is gitignored; it is local tooling, not part of the site.

## Post-Deploy Checklist

1. Set the live site URL in `og:url`/`og:image` tags and add a `sitemap.xml`
   once the final domain is known.
2. Add real merchandise images under `assets/images/` and link each product's
   Order button to its real listing when one exists.
3. Confirm the giving page's account holder name with the bank and add it to
   the donation details.
