# 🚀 Quick Start Guide

Welcome to your new portfolio! This guide will help you get started in minutes.

## ✅ Current Status

Your portfolio is **READY TO RUN**! The development server is already running at:

**🌐 http://localhost:5173/**

Open this URL in your browser to see your portfolio!

---

## 📋 What's Been Set Up

✅ **React + Vite** - Modern, fast development environment
✅ **Tailwind CSS** - Utility-first styling
✅ **Framer Motion** - Smooth animations
✅ **Dark Mode** - Theme toggle with localStorage persistence
✅ **Responsive Design** - Mobile-first approach
✅ **5 Sections** - Hero, About, Experience, Projects, Contact
✅ **Contact Form** - EmailJS integration (needs configuration)
✅ **Navigation** - Sticky navbar with smooth scroll
✅ **Footer** - Social links and copyright

---

## 🎯 Top 5 Tasks to Complete NOW

### 1. Update Personal Information (15 minutes)
**Files to edit:**
- `src/sections/Hero.jsx` - Your name and intro
- `src/sections/About.jsx` - Your bio and skills
- `src/sections/Contact.jsx` - Your email and social links

**Quick tip:** Use Ctrl+F (or Cmd+F on Mac) to search for "Aryan Surin" and replace with your name.

### 2. Add Your Projects (20 minutes)
**File:** `src/sections/Projects.jsx`

Replace the 4 sample projects with your actual projects:
```javascript
{
  title: 'Your Project Name',
  description: 'What does it do? Who is it for?',
  tech: ['React', 'Node.js', 'etc'],
  liveUrl: 'https://your-live-site.com',
  githubUrl: 'https://github.com/you/project',
}
```

### 3. Update Work Experience (15 minutes)
**File:** `src/sections/Experience.jsx`

Replace sample experience with your actual work history.

**Template:**
```javascript
{
  role: 'Your Job Title',
  company: 'Company Name',
  duration: 'Jan 2023 - Present',
  responsibilities: [
    'Achievement with metrics (improved X by Y%)',
    'Technology you used and what you built',
    'Impact on team or product',
  ],
}
```

### 4. Configure Contact Form (10 minutes)
**File:** `src/sections/Contact.jsx`

1. Sign up at [emailjs.com](https://www.emailjs.com) (free)
2. Create email service + template
3. Copy your credentials
4. Update lines 102-104 in Contact.jsx:

```javascript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
```

### 5. Add Profile Image (5 minutes)
**Steps:**
1. Add your photo to `public/` folder (e.g., `profile.jpg`)
2. Open `src/sections/About.jsx`
3. Find line 108-123 (profile image placeholder)
4. Replace with:
```javascript
<img 
  src="/profile.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

---

## 🎨 Optional Customizations

### Change Colors
**File:** `tailwind.config.js`

Current scheme: Navy Blue + Cyan Accent (like Brittany Chiang's portfolio)

### Change Fonts
**File:** `src/index.css` (line 1)

Current font: Inter (modern, clean, professional)

### Update Social Links
**Files:**
- `src/sections/Contact.jsx` (lines 209-214)
- `src/components/Footer.jsx` (lines 15-19)

Replace URLs with your actual profiles.

---

## 📂 Project Structure (Quick Reference)

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx    # Top navigation bar
│   └── Footer.jsx    # Bottom footer
│
├── sections/         # Main page sections
│   ├── Hero.jsx      # Landing section
│   ├── About.jsx     # About me + skills
│   ├── Experience.jsx # Work history
│   ├── Projects.jsx  # Portfolio projects
│   └── Contact.jsx   # Contact form
│
├── context/
│   └── ThemeContext.jsx  # Dark/Light mode
│
├── utils/
│   └── helpers.js    # Utility functions
│
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles + Tailwind
```

---

## 💻 Common Commands

### Development
```bash
npm run dev          # Start dev server (already running!)
```

### Production Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Stop Server
Press `Ctrl + C` in the terminal running the dev server

---

## 🐛 Quick Troubleshooting

### Server won't start?
```bash
cd "c:\Users\aryan\work space\my-portfolio"
npm install
npm run dev
```

### Styles not working?
1. Check if Tailwind is imported in `src/index.css`
2. Restart the dev server (`Ctrl+C`, then `npm run dev`)

### Contact form not working?
- Configure EmailJS credentials (see task #4 above)
- Check browser console for errors (F12)

### Dark mode not working?
- Clear localStorage in browser
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📱 Testing on Mobile

### Option 1: Use Dev Tools
1. Open browser dev tools (F12)
2. Click device toolbar icon
3. Select iPhone/Android preset

### Option 2: Test on Real Device
1. Find your computer's IP address:
   ```bash
   ipconfig  # Windows
   ifconfig  # Mac/Linux
   ```
2. Run dev server with host flag:
   ```bash
   npm run dev -- --host
   ```
3. Open `http://YOUR_IP:5173` on your phone

---

## 🚢 Ready to Deploy?

### Vercel (Easiest - Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
**Done!** Your site is live in ~2 minutes.

### Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
**Done!** Your site is live instantly.

---

## 📚 Important Files

| File | Purpose | Priority |
|------|---------|----------|
| `CUSTOMIZATION_GUIDE.md` | Detailed customization instructions | ⭐⭐⭐ High |
| `NEXT_STEPS.md` | Enhancement ideas & next features | ⭐⭐ Medium |
| `README.md` | Project overview & setup | ⭐⭐⭐ High |
| `.gitignore` | Files to exclude from Git | ⭐ Low |

---

## 🎓 Learning Resources

### If you're new to React:
- [React Official Docs](https://react.dev/learn) - Start here
- [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe) - Interactive

### If you're new to Tailwind:
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Everything you need
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - Quick reference

### For Animations:
- [Framer Motion Docs](https://www.framer.com/motion/) - Animation library
- [Framer Motion Examples](https://www.framer.com/motion/examples/) - Copy & paste

---

## ⚡ Pro Tips

1. **Save often** - Changes auto-reload in dev mode
2. **Use browser dev tools** - Inspect elements, test responsiveness
3. **Start small** - Update one section at a time
4. **Test as you go** - Check each change before moving on
5. **Commit frequently** - Use Git to track your changes
6. **Mobile first** - Test on mobile devices early
7. **Get feedback** - Share with friends for honest opinions
8. **Keep it simple** - Less is more in portfolio design
9. **Be authentic** - Show your personality
10. **Update regularly** - Add new projects as you build them

---

## 🆘 Need Help?

### Check These First:
1. **CUSTOMIZATION_GUIDE.md** - Step-by-step instructions
2. **Browser Console** (F12) - Shows errors
3. **Terminal Output** - Shows build errors
4. **README.md** - General information

### Still Stuck?
- Comment in the code explains what each part does
- Google the error message
- Check React/Tailwind docs
- Ask in developer communities

---

## ✨ You're All Set!

Your portfolio is ready to customize. Start with the "Top 5 Tasks" above and you'll have a production-ready portfolio in under 2 hours!

**Current status:** ✅ Portfolio is running at http://localhost:5173/

**Next step:** Open the browser and see your portfolio live!

---

**Good luck, and happy coding! 🚀**

*Built with React, Tailwind CSS, and ❤️*
