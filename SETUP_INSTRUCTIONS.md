# Setup Instructions for Coppola Entertainment Website

## Quick Start Guide

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all necessary packages including:
- React & React DOM
- TypeScript
- Vite (build tool)
- React Router (navigation)
- Framer Motion (animations)

### 2. Add Your Images

You need to add the movie poster images and photos to the `public` folder:

#### Create the posters folder:
```bash
mkdir -p public/posters
```

#### Required images:

**Movie Posters** (place in `public/posters/`):
- `redskin.jpg` - When I Was A Redskin
- `providence.jpg` - I Make In Providence
- `seaside.jpg` - Seaside Seduction
- `jesus-mary-joey.jpg` - Jesus, Mary and Joey
- `angels-dance.jpg` - Where Angels Dance
- `tonys-turf.jpg` - Tony's Turf
- `johnny-coppola.jpg` - Johnny Coppola Live
- `doctor-egelman.jpg` - Doctor David Egelman Project

**Other Images** (place in `public/`):
- `patrick-coppola.jpg` - Photo for Biography page
- `theater-bg.jpg` - (Optional) Custom theater background

### 3. Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

You should see:
- ✅ Film reel spinning animation on header
- ✅ Navigation menu appearing after animation
- ✅ Theater curtains opening to reveal featured project
- ✅ Film strip borders on the sides
- ✅ Movie posters that open modals when clicked

### 4. Test All Pages

Navigate through all pages to ensure everything works:
- **Home** - Featured project with curtain reveal
- **Biography** - Patrick Coppola's biography
- **Portfolio** - All projects in a grid
- **Investment** - Investment opportunity details
- **Contact** - Contact form

### 5. Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder that you can upload to your web host.

## Troubleshooting

### Images Not Showing?

1. Check that images are in the correct folders
2. Verify file names match exactly (case-sensitive)
3. Make sure images are in JPG/PNG format
4. Try refreshing the browser with Ctrl+Shift+R (hard refresh)

### Animations Not Working?

1. Clear browser cache
2. Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)
3. Check browser console for errors (F12)

### Port 5173 Already in Use?

Vite will automatically try the next available port (5174, 5175, etc.)

## Need Help?

If you encounter any issues:
1. Check the browser console for error messages (Press F12)
2. Make sure all dependencies are installed (`npm install`)
3. Try deleting `node_modules` folder and running `npm install` again
4. Ensure you're using Node.js v16 or higher (`node --version`)

## Next Steps

- Customize project data in `src/data/projects.ts`
- Adjust colors in CSS files
- Modify animation timings in component files
- Add your own branding and content

Enjoy your new modern website! 🎬🎪

