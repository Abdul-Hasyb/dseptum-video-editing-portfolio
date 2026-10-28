# D.Septum — Video Editor Portfolio

Portfolio site for **D.Septum** (Abdul Haseeb): YouTube, Shorts, Instagram Reels and anime edits.

**Live:** https://abdul-hasyb.github.io/dseptum-video-editing-portfolio/

## Add or change videos

Everything you edit lives in **`videos.js`**:

- `window.VIDEOS` — one block per video. Paste a YouTube, Shorts, Google Drive or Instagram link, set `format: 'reel'` (9:16) or `'long'` (16:9). Add `featured: true` to one video to put it in the big slot.
- `window.CLIENTS` — optional custom text for client cards (big stat, description, link, logo). Any new `client` name on a video gets a card and a "Worked with" chip automatically.

Images:

- `logos/` — client profile pictures
- `thumbs/` — custom cover images (needed for Instagram reels)

After editing, commit and push — GitHub Pages updates the live site in about a minute.

## Run locally

Open the folder in VS Code and use **Live Server**, or run `python -m http.server 5500` and open http://localhost:5500.
