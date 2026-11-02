# X7SUMIT HOSTING — Frontend

Premium black + electric-blue responsive hosting dashboard UI.

## Included
- `index.html` — dashboard pages and layout
- `style.css` — responsive black/blue theme
- `script.js` — navigation, demo console, file preview and form interactions

## Deploy on GitHub + Vercel
1. Create a new GitHub repository, for example `x7sumit-hosting`.
2. Upload **all three files** (`index.html`, `style.css`, `script.js`) and this README to the repository root.
3. Open Vercel and choose **Add New → Project**.
4. Import your GitHub repository.
5. Framework Preset: **Other**. Build Command: leave blank. Output Directory: `.` (or leave default if detected).
6. Click Deploy.

## Deploy on Cloudflare Pages
1. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
2. Select your GitHub repository.
3. Framework preset: **None**.
4. Build command: leave blank.
5. Build output directory: `/` (or `.` if the dashboard requests a relative path).
6. Save and deploy.

## Important: frontend vs real Python hosting
This repository is a **frontend demo**, not a Python execution server. It can be hosted as a static website on Vercel or Cloudflare Pages. The dashboard currently uses sample server statistics and sample logs. File uploads are only displayed in the current browser session; they are not saved to a server. The deploy form does not clone repositories or start Python programs.

To make it a real hosting panel, you must build and deploy a separate backend on a VPS or other persistent server. That backend needs:
- Authentication and per-user authorization
- A secure API for file upload and project management
- A worker/process manager to start, stop and restart Python apps
- Isolated containers or restricted OS users for each customer
- Resource limits, storage quotas, log streaming and monitoring
- Secrets/environment-variable management

**Security:** Never put VPS root passwords, SSH private keys, bot tokens, or other secrets in frontend JavaScript or GitHub. Do not expose an unrestricted terminal or allow arbitrary commands from an unauthenticated API. Use server-side authentication and process isolation.

## Local preview
Open `index.html` in a browser. No build step or package installation is required.
