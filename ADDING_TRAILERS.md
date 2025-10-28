# How to Add Trailers to Projects

Your website is now ready to display trailers for each project! Here's how to add them when you get the videos from your client.

---

## 📹 Adding a Trailer

### Step 1: Open the projects data file
```
src/data/projects.ts
```

### Step 2: Find the project you want to add a trailer to

### Step 3: Add the `trailer` field with the URL

---

## 🎬 Supported Video Formats

### YouTube Videos (Recommended)
The easiest option - just paste the YouTube URL:

```typescript
{
  id: 'a-wake-in-providence',
  title: 'A Wake in Providence',
  // ... other fields ...
  trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}
```

Or the short URL format:
```typescript
trailer: 'https://youtu.be/dQw4w9WgXcQ',
```

### Vimeo Videos
Just paste the Vimeo URL:

```typescript
trailer: 'https://vimeo.com/123456789',
```

### Direct Video Files
If you have the video file hosted on your server:

```typescript
trailer: '/videos/my-trailer.mp4',
```

Or a full URL:
```typescript
trailer: 'https://yourwebsite.com/videos/my-trailer.mp4',
```

---

## 📝 Complete Example

Here's how "A Wake in Providence" would look with a trailer:

```typescript
{
  id: 'a-wake-in-providence',
  title: 'A Wake in Providence',
  poster: '/posters/providence.png',
  tagline: 'Love. Family. Tradition?',
  description: 'Shot in the summer of 1998 - 35mm feature film',
  year: '1998',
  genre: 'Romantic Comedy',
  producer: 'Patrick Coppola',
  trailer: 'https://www.youtube.com/watch?v=YOUR_ACTUAL_VIDEO_ID',
  cast: [
    'Vincent Pagano',
    'Victoria Rowell (Diagnosis Murder)',
    'Dan Lauria (The Wonder Years)',
    'Adrienne Barbeau (Maude, The Fog)'
  ],
  // ... rest of the fields
}
```

---

## 🎨 What the Trailer Section Looks Like

When a trailer is added, the modal will display:

```
┌─────────────────────────────────────────────┐
│ 🎬 Watch Trailer                            │
│ ┌─────────────────────────────────────────┐ │
│ │                                         │ │
│ │         [VIDEO PLAYER]                  │ │
│ │       with copper/gold border           │ │
│ │         and film strip effect           │ │
│ │                                         │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

**Features:**
- 🎞️ Theatrical copper and gold frame
- 📺 16:9 responsive video player
- ▶️ Full screen support
- 🎬 Flickering film icon
- 🌓 Subtle film strip pattern overlay
- 📱 Works perfectly on mobile

---

## 🎯 Quick Steps for Each Project

1. Get the trailer URL from client
2. Open `src/data/projects.ts`
3. Find the project
4. Add this line: `trailer: 'PASTE_URL_HERE',`
5. Save the file
6. The trailer appears automatically!

---

## ⚠️ Important Notes

### No Trailer? No Problem!
- If a project doesn't have a `trailer` field, the section simply won't appear
- No errors, no empty spaces
- The modal looks great either way

### YouTube Tips
- Make sure the video is public or unlisted (not private)
- Copy the URL from the browser address bar
- Both full and short URLs work

### Vimeo Tips  
- Video must be public or have the right privacy settings
- Get the URL from the browser address bar

### Direct Video Files
- Supported formats: MP4, WebM, OGG
- MP4 is most compatible
- Make sure files are optimized for web (not too large)
- Place files in `public/videos/` folder

---

## 🚀 Testing

After adding a trailer:

1. Save the file
2. Refresh your browser (or it auto-refreshes)
3. Click on the movie poster
4. Look for the "🎬 Watch Trailer" section
5. Click play!

---

## 📂 Organizing Video Files

If using direct video files, create this folder structure:

```
public/
├── posters/
│   ├── redskin.jpg
│   ├── providence.png
│   └── ...
└── videos/
    ├── redskin-trailer.mp4
    ├── providence-trailer.mp4
    └── ...
```

Then reference them like:
```typescript
trailer: '/videos/redskin-trailer.mp4',
```

---

## 🎬 Example: Adding Trailers to All Projects

```typescript
export const projects: Project[] = [
  {
    id: 'when-i-was-a-redskin',
    title: 'When I Was A Redskin',
    // ... other fields ...
    trailer: 'https://www.youtube.com/watch?v=abc123',
  },
  {
    id: 'a-wake-in-providence',
    title: 'A Wake in Providence',
    // ... other fields ...
    trailer: 'https://www.youtube.com/watch?v=def456',
  },
  {
    id: 'seaside-seduction',
    title: 'Seaside Seduction',
    // ... other fields ...
    trailer: 'https://vimeo.com/789012',
  },
  // Continue for all projects...
];
```

---

## 💡 Pro Tips

1. **YouTube is easiest** - Let them host the large video files
2. **Test on mobile** - Make sure video plays on phones/tablets
3. **Keep trailers short** - 1-3 minutes is ideal for web
4. **Add them gradually** - You can add trailers one at a time as you get them

---

**That's it! Your site is ready for trailers whenever you are! 🎬✨**

