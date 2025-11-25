# M2 Film - Landing Site

Landing page and download site for M2 Film, a metadata editor for film photographers.

**Live Site**: Coming soon (will be deployed to Vercel)

## About

This is the public-facing website for M2 Film. The actual app code lives in a separate private repository.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting (recommended)

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
git clone git@github.com:eham1/m2-film-site.git
cd m2-film-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
npm start  # Preview production build
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the `m2-film-site` repository
4. Vercel auto-detects Next.js and deploys
5. Done! Site is live with auto-deployment on push

### Environment Variables

No environment variables needed for basic deployment.

For future email signup integration, add:
```
MAILCHIMP_API_KEY=your_key
MAILCHIMP_LIST_ID=your_list
```

## Customization

### Colors

Edit `/app/globals.css` to change the color scheme:

```css
:root {
  --color-cream: #fef9f0;
  --color-teal: #00d4d4;
  --color-red: #ff3366;
  --color-yellow: #ffd900;
  --color-orange: #ff6b35;
}
```

### Content

- **Home page**: `/app/page.tsx`
- **Download page**: `/app/download/page.tsx`
- **Download button**: `/components/DownloadButton.tsx`

### Styling

The site uses a simplified retro aesthetic with:
- Solid colors (no overwhelming patterns)
- Chunky borders and shadows
- Clean, readable typography
- Gradient accents

Much simpler than the app's wild styling, but shares the same color palette.

## Pages

- **`/`** - Home page with features and CTA
- **`/download`** - Download instructions and system requirements

## Components

- **`DownloadButton`** - Detects user's OS and shows appropriate download link

## Release Updates

When you release a new version of the app:

1. Create a GitHub Release at `https://github.com/eham1/m2-film-app/releases`
2. Upload the `.dmg` and `.zip` files
3. The download button automatically points to `/releases/latest`
4. Update version number in `/app/download/page.tsx` if desired

## Future Features

- Email signup for Pro version waitlist
- Screenshots gallery
- Video demo
- User testimonials
- Blog/changelog

## Contributing

Bug reports and suggestions welcome! Open an issue.

## License

ISC License

---

Built with Next.js • Deployed on Vercel
