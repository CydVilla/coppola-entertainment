# 🎨 Visual Design Guide

This guide describes what you should see when the website runs.

---

## 🎬 Header - Film Reel Animation

### On Page Load (First 2-3 seconds):

```
     ╔════════════════════════════════════════════╗
     ║  [SPINNING REEL]  COPPOLA ENTERTAINMENT   ║
     ╚════════════════════════════════════════════╝
```

**The film reel:**
- Circular, copper/orange color (#c66302)
- 3D appearance with multiple rings
- Center has 8 holes arranged in circle
- Spins 360° smoothly
- After animation: stays static on left side

**The text:**
- "COPPOLA" in large gold letters
- "ENTERTAINMENT" below in slightly smaller gold
- Fades in from left as reel completes spin

**Navigation menu:**
- Appears after reel animation
- Gold italic text: Home | Biography | Portfolio | Investment | Contact
- Active page highlighted in copper color
- On mobile: hamburger menu (☰)

---

## 🎭 Film Strip Borders

### Left and Right Sides:

```
║█║                                              ║█║
║ ║           [MAIN CONTENT AREA]               ║ ║
║█║                                              ║█║
║ ║                                              ║ ║
║█║                                              ║█║
```

**Design details:**
- Fixed to left and right edges
- Black background with copper rectangles
- Repeating pattern (looks like film sprocket holes)
- 60px wide on desktop, 30px on mobile
- Visible but not distracting

---

## 🎪 Curtain Animation

### Initial State (Closed):

```
╔══════════════════════════════════════════════╗
║ [FOLD] [FOLD] [FOLD] ║ [FOLD] [FOLD] [FOLD] ║
║     COPPER CURTAIN    ║    COPPER CURTAIN    ║
║  [LEFT PANEL]  🎗️    ║   🎗️ [RIGHT PANEL]  ║
╚══════════════════════════════════════════════╝
```

### Opening Animation (1.5 seconds):

```
[FOLD][FOLD]                         [FOLD][FOLD]
  [CURTAIN]                            [CURTAIN]
   MOVING ←                              → MOVING
     LEFT                                  RIGHT
```

### Final State (Open):

```
[FOLD]                                      [FOLD]
[PANEL]      [REVEALED CONTENT]            [PANEL]
    🎗️         (Featured Project)             🎗️
```

**Color:**
- Exact color: #c66302 (copper/orange as requested)
- Gradient for depth: lighter in center, darker at edges
- Gold tassels (🎗️) on inside edges

**Where used:**
- Home page: reveals featured film project
- Investment page: reveals investment opportunity

---

## 🎬 Project Cards

### Card Layout:

```
╔═══════════════════╗
║                   ║
║   MOVIE POSTER    ║
║      IMAGE        ║
║                   ║
║                   ║
╚═══════════════════╝
  [Completed] ← status badge
```

### On Hover:

```
╔═══════════════════╗
║  [Slightly bigger]║
║   [Lifted up]     ║
║  MOVIE TITLE      ║
║  Tagline text...  ║
║ [View Details] ←  ║
╚═══════════════════╝
    (Glowing)
```

**Features:**
- Copper border (#c66302)
- Shadow and glow effects
- Scales up 5% on hover
- Smooth transitions
- Status badge in corner (green=completed, yellow=pre-production, blue=development)

---

## 📱 Modal Popup

### When You Click a Poster:

```
╔════════════════════════════════════════════════╗
║ [X] Close button                               ║
║                                                ║
║ ┌─────────┐  PROJECT TITLE                    ║
║ │ POSTER  │  Tagline in italic...             ║
║ │  IMAGE  │                                    ║
║ └─────────┘  Year: 2002                        ║
║              Genre: Drama                      ║
║                                                ║
║ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ║
║                                                ║
║ Overview                                       ║
║ Full description text here...                  ║
║                                                ║
║ Synopsis                                       ║
║ Complete story synopsis...                     ║
║                                                ║
║ Director | Producer | Writer                   ║
║ Names...                                       ║
║                                                ║
║ Cast                                           ║
║ • Actor Name 1                                 ║
║ • Actor Name 2                                 ║
║                                                ║
║ 🏆 Awards & Recognition                        ║
║ • Award details...                             ║
╚════════════════════════════════════════════════╝
```

**Design:**
- Dark background with copper border
- Scrollable if content is long
- Click outside or X to close
- Smooth fade-in/scale animation
- All project details in one place

---

## 📄 Page Layouts

### Home Page:
1. **Hero Section** with curtain reveal → featured project
2. **Welcome message** in highlighted box
3. **Completed Projects** grid (4 columns)
4. **In Development** grid (4 columns)

### Biography Page:
1. **Title** at top center
2. **Photo + Bio text** side-by-side
3. **Career sections** in highlighted boxes
4. Photo stays visible while scrolling (sticky)

### Portfolio Page:
1. **Title** at top center
2. **All projects** in grid (auto-fit columns)
3. Mix of completed and in-development

### Investment Page:
1. **Curtain reveal** → featured opportunity
2. **Poster + Details** side-by-side
3. **Full synopsis** below
4. **Contact CTA** button at bottom

### Contact Page:
1. **Title** at top center
2. **Form fields** stacked vertically
3. **Contact info section** highlighted
4. **Submit/Clear buttons** side-by-side

---

## 🎨 Color Palette

```
MAIN COLORS:
┌─────────────┬─────────────┬─────────────┐
│   #c66302   │   #d4af37   │   #0a0a0a   │
│   Copper    │    Gold     │    Black    │
│  (Curtains) │  (Titles)   │ (Background)│
└─────────────┴─────────────┴─────────────┘

ACCENT COLORS:
┌─────────────┬─────────────┬─────────────┐
│   #d87a1a   │   #f5f5f5   │   #d0d0d0   │
│Light Copper │    White    │  Light Gray │
│  (Hover)    │  (Buttons)  │    (Text)   │
└─────────────┴─────────────┴─────────────┘
```

---

## 📐 Spacing & Sizes

### Typography:
- **Main Title**: 3rem (48px) - Gold
- **Section Titles**: 2rem (32px) - Copper
- **Body Text**: 1.1rem (17.6px) - Light Gray
- **Taglines**: 1.2rem (19.2px) - Italic

### Layouts:
- **Max Content Width**: 1400px
- **Page Padding**: 40px (20px on mobile)
- **Card Gaps**: 30px
- **Border Radius**: 8-12px

### Film Elements:
- **Film Strips**: 60px wide (30px mobile)
- **Film Reel**: 80px diameter
- **Curtain Tassels**: 30px wide, 120px tall

---

## ✨ Animation Timing

| Element | Duration | Delay | Effect |
|---------|----------|-------|--------|
| Film Reel Spin | 2s | 0s | Rotate 360° |
| Logo Reveal | 1s | 2s | Fade in + slide |
| Navigation | 0.5s | 2.5s | Fade in |
| Curtains Open | 1.5s | 0.5s | Scale to 0 |
| Content Reveal | 0.5s | 2s | Fade + scale |
| Card Hover | 0.3s | 0s | Scale + lift |
| Modal Open | 0.3s | 0s | Fade + scale |

---

## 🎯 Responsive Breakpoints

### Desktop (1920px+):
- Full width layouts
- Side-by-side content
- 4-column grids

### Laptop (1024px - 1919px):
- Slightly condensed
- 3-column grids
- Smaller spacing

### Tablet (768px - 1023px):
- 2-column grids
- Stacked sections
- Mobile menu

### Mobile (320px - 767px):
- Single column
- Stacked everything
- Larger touch targets
- Smaller film strips (30px)

---

## 🎬 Special Effects

### Hover States:
- **Links**: Glow + color change
- **Cards**: Lift + glow + scale
- **Buttons**: Brighten + lift

### Shadows:
- **Cards**: 0 10px 30px rgba(0,0,0,0.8)
- **Modals**: 0 20px 60px rgba(0,0,0,0.9)
- **Glows**: 0 0 20px rgba(198,99,2,0.5)

### Borders:
- **Main**: 2-3px solid #c66302
- **Subtle**: 1px solid rgba(198,99,2,0.3)
- **None on images** (border on container only)

---

**This is what makes the site feel theatrical and professional! 🎭✨**

