# 🎬 Cinema Projector Header Animation

Your website now features a stunning cinema projector animation that projects "COPPOLA ENTERTAINMENT" onto a screen!

---

## 🎥 How It Works

The animation happens in 3 stages:

### Stage 1: Cinema Projector (0-2 seconds)
- The cinema projector video plays as background
- Projector light beam effect
- Atmospheric flickering

### Stage 2: Projection onto Screen (2-3.5 seconds)
- Bright white projection screen appears
- "COPPOLA ENTERTAINMENT" text is projected onto it
- Film reel icon above the text
- Film grain and flickering effects (authentic cinema feel)
- Text fades up with glow

### Stage 3: Screen Vanishes (3.5+ seconds)
- White screen fades away
- Projected text transforms into solid logo
- Navigation menu appears
- Clean, professional final state

---

## ✨ Special Effects

### Projection Effects:
- 🎬 **Film grain texture** - Authentic old film look
- ✨ **Text flicker** - Subtle projector flicker effect
- 💡 **Projector beam** - Light beam from projector
- 🌓 **Vignette** - Darkened edges like projected image
- 🎞️ **Film reel icon** - Animated reel graphic

### Color Scheme:
- **Screen**: Pure white (#ffffff)
- **Projected Text**: Copper (#c66302) and Gold (#d4af37)
- **Glow**: Multiple shadow layers for depth
- **Final Logo**: Copper and gold with elegant shadows

---

## 🎨 Visual Journey

```
┌─────────────────────────────────────────────────┐
│  Stage 1: PROJECTOR VIDEO (2 sec)              │
│  [Cinema projector footage playing]             │
│         with light beam effect                   │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│  Stage 2: PROJECTION (1.5 sec)                  │
│  ┌───────────────────────────────────────┐     │
│  │   ╔═══╗                                │     │
│  │   ║ 🎞 ║  White projection screen      │     │
│  │   ╚═══╝                                │     │
│  │                                         │     │
│  │     COPPOLA ENTERTAINMENT              │     │
│  │  (glowing, flickering projection)      │     │
│  └───────────────────────────────────────┘     │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│  Stage 3: FINAL LOGO (permanent)                │
│  🎞  COPPOLA ENTERTAINMENT  [Nav Menu]         │
│     (solid, elegant)                             │
└─────────────────────────────────────────────────┘
```

---

## 📁 Files Created

### New Components:
- `src/components/ProjectorHeader.tsx` - Main projector animation component
- `src/components/ProjectorHeader.css` - All styling and animations

### Updated Files:
- `src/components/Layout.tsx` - Now uses ProjectorHeader instead of FilmReelHeader

### Video Asset:
- `public/videos/105438-670487243.mp4` - Cinema projector footage

---

## 🎯 Animation Timing

| Stage | Duration | What Happens |
|-------|----------|--------------|
| 0s - 2s | 2 sec | Projector video plays |
| 2s - 3.5s | 1.5 sec | Text projected onto screen |
| 3.5s - 4s | 0.5 sec | Screen fades away |
| 4s+ | Permanent | Final logo and navigation |

**Total animation: 4 seconds**

---

## 🎬 Technical Details

### Projector Video:
- Plays automatically (autoPlay)
- Muted for autoplay compatibility
- Mobile-friendly (playsInline)
- Opacity reduced to 40% for subtlety
- Filtered for dramatic effect

### Projection Screen:
- White gradient for realistic look
- Inner shadow for depth
- Smooth fade-out animation
- Responsive sizing

### Text Effects:
- Multiple text-shadow layers for glow
- Subtle flicker animation (0.3s cycle)
- Smooth fade-in and scale-up
- Letter-spacing for cinematic feel

### Film Grain:
- SVG-based noise pattern
- Animated movement for realism
- Low opacity for subtlety
- Pointer-events disabled (no click interference)

---

## 💡 Customization Options

### Change Animation Speed:

Edit `src/components/ProjectorHeader.tsx`:

```typescript
// Line ~11-12: Projector stage duration
const projectorTimer = setTimeout(() => {
  setAnimationStage('projection');
}, 2000); // ← Change this (milliseconds)

// Line ~15-16: Projection stage duration
const projectionTimer = setTimeout(() => {
  setAnimationStage('complete');
  setShowNav(true);
}, 3500); // ← Change this (total time)
```

### Adjust Flicker Speed:

Edit `src/components/ProjectorHeader.css`:

```css
/* Line ~99: Projector beam flicker */
animation: projectorFlicker 0.15s infinite;
/* Change 0.15s to adjust speed */

/* Line ~176: Text flicker */
animation: textFlicker 0.3s infinite;
/* Change 0.3s to adjust speed */
```

### Change Colors:

Find and replace in `ProjectorHeader.css`:
- `#c66302` - Copper (main brand color)
- `#d4af37` - Gold (accent color)
- `#ffffff` - White (projection screen)

---

## 🔄 Switch Back to Film Reel

Want the original spinning reel animation instead?

Edit `src/components/Layout.tsx`:

```typescript
// Change this:
import ProjectorHeader from './ProjectorHeader';

// Back to this:
import FilmReelHeader from './FilmReelHeader';

// And change this:
<ProjectorHeader />

// Back to this:
<FilmReelHeader />
```

Both components work perfectly - choose your favorite! 🎬

---

## 📱 Responsive Behavior

### Desktop (1024px+):
- Full-size projector video
- Large projected text
- All effects visible

### Tablet (768px - 1023px):
- Slightly smaller text
- Maintained effects
- Optimized spacing

### Mobile (< 768px):
- Compact layout
- Hamburger menu
- Faster animation recommended
- Smaller reel icon

---

## 🎪 Inspiration

Based on the cinema projector video provided by the client, this animation creates:
- Authentic cinema atmosphere
- Professional film industry feel
- Memorable brand introduction
- Theatrical elegance

---

## ✅ What Makes It Special

1. **Three-Act Structure** - Like a mini movie intro
2. **Authentic Effects** - Real film grain and flicker
3. **Smooth Transitions** - Professional fade timing
4. **Responsive Design** - Works on all devices
5. **Performance** - Optimized animations
6. **Brand Integration** - Uses exact brand colors

---

**Your cinema projector header is ready to impress! 🎬✨**

