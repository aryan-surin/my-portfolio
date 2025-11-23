# Aryan Surin - Portfolio Website

A modern, minimal, and fully responsive portfolio website built with React and Tailwind CSS. Showcasing frontend development skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, minimal UI inspired by industry-leading portfolios
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between dark and light themes with persistent storage
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Contact Form**: EmailJS integration for direct communication
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance**: Fast load times with optimized assets

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Version Control**: Git

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Install dependencies** (already done)
   ```bash
   npm install
   ```

2. **Configure EmailJS** (for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update credentials in `src/sections/Contact.jsx`:
     ```javascript
     const SERVICE_ID = 'your_service_id';
     const TEMPLATE_ID = 'your_template_id';
     const PUBLIC_KEY = 'your_public_key';
     ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Customization Guide

### 1. Personal Information

Update the following sections with your information:

- **Hero Section** (`src/sections/Hero.jsx`): Name, title, description
- **About Section** (`src/sections/About.jsx`): Bio, tech stack, profile image
- **Experience Section** (`src/sections/Experience.jsx`): Work history
- **Projects Section** (`src/sections/Projects.jsx`): Your projects
- **Contact Section** (`src/sections/Contact.jsx`): Email, location, social links

### 2. Profile Image

Replace the placeholder in the About section:
- Add your image to `public/` folder
- Update the image path in `src/sections/About.jsx`

### 3. Project Images

Add project screenshots:
- Place images in `public/` folder
- Update image paths in `src/sections/Projects.jsx`

### 4. Resume

Add your resume PDF:
- Place `resume.pdf` in `public/` folder
- Or update the link in `src/components/Navbar.jsx`

### 5. Social Links

Update social media URLs in:
- `src/sections/Contact.jsx`
- `src/components/Footer.jsx`

### 6. Color Scheme

Modify colors in `tailwind.config.js`:
```javascript
colors: {
  navy: { /* Your colors */ },
  slate: { /* Your colors */ },
  accent: { /* Your colors */ },
}
```

## 📁 Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/         # React context (theme)
│   │   └── ThemeContext.jsx
│   ├── utils/           # Helper functions
│   │   └── helpers.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com/)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Drag & drop `dist` folder to [Netlify](https://www.netlify.com/)

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://aryan-surin.github.io/my-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Known Limitations

- EmailJS requires configuration before contact form works
- Project images are placeholders (replace with actual screenshots)
- Experience data is sample data (update with real information)
- Resume link needs actual PDF file

## 🐛 Troubleshooting

### Issue: Tailwind styles not working
- Ensure `tailwind.config.js` content paths are correct
- Restart dev server after config changes

### Issue: EmailJS not sending emails
- Verify EmailJS credentials are correct
- Check browser console for error messages
- Ensure email template fields match form names

### Issue: Animations not smooth
- Check if Framer Motion is properly installed
- Verify browser supports CSS animations

## 👤 Author

**Aryan Surin**
- GitHub: [@aryan-surin](https://github.com/aryan-surin)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Design inspiration: [Brittany Chiang](https://brittanychiang.com/) & [Adham Dannaway](https://www.adhamdannaway.com/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Fonts: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

---

**Built with ❤️ by Aryan Surin**
