# 🚀 Quick Start Guide

## Get Up and Running in 3 Steps!

### Step 1: Install Dependencies (2 minutes)

Open terminal in this folder and run:
```bash
npm install
```

Wait for it to complete. You'll see "added XXX packages" when done.

---

### Step 2: Add Your Images (5 minutes)

You need to add images to make the site look complete:

#### Required Movie Posters
Copy your movie poster images into `public/posters/` folder:
- `redskin.jpg`
- `providence.jpg`
- `seaside.jpg`
- `jesus-mary-joey.jpg`
- `angels-dance.jpg`
- `tonys-turf.jpg`
- `johnny-coppola.jpg`
- `doctor-egelman.jpg`

#### Required Photos
Copy these to the `public/` folder:
- `patrick-coppola.jpg` (for Biography page)

**Image Tips:**
- Use JPG format for smaller file sizes
- Movie posters should be portrait (taller than wide)
- Recommended size: 600x900 pixels
- Don't worry if some are missing - placeholders will show

---

### Step 3: Start the Development Server (1 minute)

Run:
```bash
npm run dev
```

Your browser will open to: `http://localhost:5173`

**You should see:**
- ✅ Cinema projector projecting the logo onto a screen
- ✅ Screen fading away revealing "COPPOLA ENTERTAINMENT"
- ✅ Theater curtains opening to reveal featured project
- ✅ Film strips on the sides
- ✅ Navigation menu (Home, Biography, Portfolio, Investment, Contact)

**Note:** There's also an alternative spinning film reel header available!

---

## 🎬 Test Everything

### Click through all pages:
1. **Home** - See the curtain animation and featured project
2. **Biography** - Read Patrick's story
3. **Portfolio** - View all projects
4. **Investment** - See investment opportunities
5. **Contact** - Try the contact form

### Test the modal feature:
- Click any movie poster
- Modal should open with full details
- Click X or outside to close

### Test responsive design:
- Resize browser window
- Everything should adapt smoothly
- Try on your phone/tablet

---

## ✅ What's Already Done

Everything you requested is built:

| Feature | Status | Where to Find |
|---------|--------|---------------|
| Cinema projector animation | ✅ Complete | Header on every page |
| Alternative film reel | ✅ Complete | Available (see docs) |
| Curtain reveal | ✅ Complete | Home & Investment pages |
| Project modals | ✅ Complete | Click any poster |
| Trailer players | ✅ Complete | In modals (when added) |
| Film strips | ✅ Complete | Left & right sides |
| Theater background | ✅ Complete | Behind all content |
| All 5 pages | ✅ Complete | Use navigation menu |
| Responsive design | ✅ Complete | Works on all devices |

---

## 🎨 Customization (Optional)

### Want to change the curtain color?
Current: `#c66302` (copper/orange)

Edit these files and search for `#c66302`:
- `src/components/CurtainReveal.css`
- `src/App.css`

### Want to adjust animation speed?
- Film reel: `src/components/FilmReelHeader.tsx` (line 15)
- Curtains: `src/components/CurtainReveal.tsx` (line 38)

### Want to add/edit projects?
Edit: `src/data/projects.ts`

---

## 📦 Ready for Production?

When ready to deploy your site:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for your web host.

Then preview it:
```bash
npm run preview
```

Upload the contents of the `dist` folder to your web hosting service!

---

## 🆘 Something Not Working?

### Common Issues:

**Port 5173 already in use?**
- Vite will automatically use next port (5174, 5175, etc)
- Or stop other dev servers and try again

**Images not showing?**
- Check file names match exactly (case-sensitive!)
- Make sure images are in correct folders
- Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

**Animations not playing?**
- Clear browser cache
- Try different browser (Chrome, Firefox, Safari, Edge)

**White screen / errors?**
- Open browser console (F12)
- Check for red error messages
- Common fix: delete `node_modules` folder and run `npm install` again

---

## 📚 Documentation

More detailed info in:
- `README.md` - Technical documentation
- `SETUP_INSTRUCTIONS.md` - Detailed setup guide
- `PROJECT_SUMMARY.md` - Complete feature overview
- `FEATURES_CHECKLIST.md` - All features listed

---

## 🎯 Next Steps

1. Add your images
2. Test all features
3. Customize colors/text if needed
4. Show to client for approval
5. Build for production
6. Deploy to web hosting

---

**That's it! Your modern Coppola Entertainment website is ready! 🎬✨**

*Need help? Check the other documentation files or review the code - it's well-commented!*

