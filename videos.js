/* =====================================================================
   D.SEPTUM PORTFOLIO — YOUR VIDEOS
   This is the only file you need to edit to add, remove or reorder work.

   HOW TO ADD A VIDEO
   1. Copy one { ... } block below and paste it where you want it to
      appear (the list order = the order on the site). Keep the comma
      after the closing } .
   2. Paste the video link into `link`. Works with:
        - YouTube videos and Shorts
        - Google Drive (file must be shared "Anyone with the link")
        - Instagram reels / posts (account must be public)
      For YouTube you can add &t=66s to the link to start at 1:06.
   3. Set `format`:
        'reel' = vertical 9:16 (Shorts, Reels)
        'long' = wide 16:9 (YouTube videos, long-form samples)
   4. Optional: `featured: true` puts that video in the big slot at the
      top of the work section (use it on one video only).
   5. Optional: `logo: 'logos/client.jpg'` — the client's profile picture.
      Any new `client` name you write on a video is added to the moving
      "WORKED WITH" strip by itself. Save their profile picture in the
      `logos` folder and put its name here to show it (otherwise the
      strip shows their initials).
   6. Optional: `thumb: 'thumbs/my-image.jpg'` sets your own cover image.
      YouTube and Drive covers load by themselves; Instagram does NOT,
      so for an Instagram reel take a screenshot of its first frame,
      save it in the `thumbs` folder, and put its name here.
   7. Save, refresh the site, and re-upload the folder to Netlify (or
      push to GitHub) to update the live site.
   ===================================================================== */

window.VIDEOS = [
  {
    title: 'What If Zoro Was Executed?',
    client: 'Facadify',
    note: '120K+ subscribers · 105K views · I edited the first 6 minutes',
    tag: 'YOUTUBE',
    link: 'https://www.youtube.com/watch?v=NwKMzgCogWE&t=66s',
    format: 'long',
    featured: true
  },
  {
    title: 'Jon Jones toughest opponent',
    client: 'Fighter Storyz',
    note: '15K views',
    tag: 'YT SHORT',
    link: 'https://www.youtube.com/shorts/N1Vdy3Vy4aQ',
    format: 'reel'
  },
  {
    title: 'Fonzi AI reel',
    client: 'Fonzi AI',
    note: '@fonziai',
    tag: 'INSTA REEL',
    link: 'https://www.instagram.com/reel/Db9BnEIAkFk/',
    thumb: 'thumbs/fonzi-ai.jpg',
    format: 'reel'
  },
  {
    title: 'One Piece Sample 1',
    client: '',
    note: 'Anime sample · 1:30',
    tag: 'ANIME SAMPLE',
    link: 'https://drive.google.com/file/d/1hBsnYVgtsQgF9VLPu2mXqb_7zzwAY5x3/view?usp=sharing',
    format: 'long'
  },
  {
    title: 'Dragon Ball Z edit',
    client: '',
    note: 'Anime sample · 0:30',
    tag: 'ANIME SAMPLE',
    link: 'https://drive.google.com/file/d/1Gi2rMkE_VoWsNjYeSVXf4w4fcCMhGkR2/view?usp=sharing',
    format: 'long'
  },
  {
    title: 'One piece Sample 2',
    client: '',
    note: 'Motion text sample',
    tag: 'SAMPLE',
    link: 'https://drive.google.com/file/d/1CRDgG3D93sXcjBq_d2k9Pd3uUfY33vov/view?usp=sharing',
    format: 'long'
  }
];

/* =====================================================================
   CLIENTS — shown in the moving "WORKED WITH" strip AND as the big
   "Trusted by creators" cards.

   You don't HAVE to add anyone here: any new `client` name you write on
   a video above gets a strip chip and a card by itself (showing how many
   edits you did for them). Add a client here only when you want to
   control what their card says:
     stat / statLabel : the big number and the words next to it
     desc             : one or two sentences under their name
     link             : their channel or profile
     logo             : their profile picture in the `logos` folder
     label            : the small text at the top of the card
     meta             : the small text in the moving strip
     platform         : 'youtube' or 'instagram' (picks the icon)
   ===================================================================== */

window.CLIENTS = [
  {
    name: 'Facadify',
    platform: 'youtube',
    logo: 'logos/facadify.jpg',
    link: 'https://www.youtube.com/@realfacadify',
    label: 'YouTube · Long-form',
    meta: 'YouTube · 120K+ subs',
    stat: '120K+',
    statLabel: 'subscribers',
    desc: 'One Piece "What If" channel. I edited the first 6 minutes of "What If Zoro Was Executed?", now at 105K views.'
  },
  {
    name: 'Fighter Storyz',
    platform: 'youtube',
    logo: 'logos/fighter-storyz.jpg',
    link: 'https://www.youtube.com/@FighterStoryz',
    label: 'YouTube Shorts',
    meta: 'YouTube Shorts',
    stat: '15K+',
    statLabel: 'views on one Short',
    desc: 'Fight-story Shorts. "Jon Jones toughest opponent" is a 30-second edit.'
  },
  {
    name: 'Fonzi AI',
    platform: 'instagram',
    logo: 'logos/fonzi-ai.jpg',
    link: 'https://www.instagram.com/fonziai/',
    label: 'Instagram Reels',
    meta: 'Instagram Reels',
    stat: 'AI',
    statLabel: 'startup client',
    desc: 'Reels for an AI hiring platform.'
  }
];
