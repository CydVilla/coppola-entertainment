# Coppola Entertainment Website

A modern, animated website for Coppola Entertainment built with React, TypeScript, and Framer Motion.

## Features

🎬 **Cinema Projector Animation** - Cinema projector projects "COPPOLA ENTERTAINMENT" onto a screen that fades away
🎥 **Alternative: Film Reel Header** - Spinning film reel option also available
🎭 **Curtain Reveal Animation** - Theater curtains that open to reveal featured content (using #c66302 color)
🎬 **Project Cards with Modals** - Click on movie posters to open detailed modals instead of separate pages
📹 **Trailer Player** - Elegant video player for trailers (YouTube, Vimeo, or direct video files)
🎞️ **Film Strip Borders** - Decorative film strip elements on the sides of the page
🎪 **Theater Background** - Classy theater-themed background design
📱 **Fully Responsive** - Works beautifully on desktop, tablet, and mobile devices

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to the `public` folder:
   - `/public/posters/` - Movie poster images
   - `/public/patrick-coppola.jpg` - Biography photo
   - `/public/theater-bg.jpg` - (Optional) Custom theater background

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── FilmReelHeader.tsx      # Animated film reel header
│   ├── CurtainReveal.tsx       # Theater curtain animation
│   ├── ProjectCard.tsx         # Movie poster cards
│   ├── ProjectModal.tsx        # Detailed project modal
│   └── Layout.tsx              # Main layout wrapper
├── pages/
│   ├── Home.tsx                # Homepage with featured project
│   ├── Biography.tsx           # Patrick Coppola's biography
│   ├── Portfolio.tsx           # All projects showcase
│   ├── Investment.tsx          # Investment opportunities
│   └── Contact.tsx             # Contact form
├── data/
│   └── projects.ts             # Project data
├── App.tsx                     # Main app component
└── main.tsx                    # Entry point
```

## Customization

### Adding New Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  poster: '/posters/image.jpg',
  tagline: 'A compelling tagline',
  description: 'Project description',
  year: '2024',
  genre: 'Drama',
  trailer: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // Optional
  status: 'completed', // 'completed' | 'pre-production' | 'development'
  // ... more fields
}
```

### Adding Trailers

See `ADDING_TRAILERS.md` for detailed instructions on adding video trailers.

Quick example:
```typescript
trailer: 'https://www.youtube.com/watch?v=abc123', // YouTube
trailer: 'https://vimeo.com/123456789',            // Vimeo
trailer: '/videos/my-trailer.mp4',                 // Direct file
```

### Changing Colors

The main brand colors are:
- Primary: `#c66302` (Copper/Orange - curtains)
- Secondary: `#d4af37` (Gold - text accents)
- Background: `#0a0a0a` (Near black)

Update colors in the respective CSS files.

### Animation Timing

Adjust animation timing in component files:
- Projector animation: `ProjectorHeader.tsx` (currently 4 seconds total)
- Alternative film reel: `FilmReelHeader.tsx` (2 seconds)
- Curtain opening: `CurtainReveal.tsx` (1.5 seconds)

### Switch Header Animations

Choose between cinema projector or film reel in `Layout.tsx`:

```typescript
// Current (Projector):
import ProjectorHeader from './ProjectorHeader';
<ProjectorHeader />

// Alternative (Film Reel):
import FilmReelHeader from './FilmReelHeader';
<FilmReelHeader />
```

See `PROJECTOR_ANIMATION.md` for detailed projector animation docs.

## Image Requirements

### Movie Posters
- Format: JPG or PNG
- Aspect Ratio: 2:3 (portrait)
- Recommended Size: 600x900px minimum
- Location: `/public/posters/`

### Biography Photo
- Format: JPG or PNG
- Aspect Ratio: 3:4 (portrait)
- Recommended Size: 600x800px minimum
- Location: `/public/patrick-coppola.jpg`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Coppola Entertainment. All rights reserved.

## Contact

For questions or support, visit the Contact page on the website.

