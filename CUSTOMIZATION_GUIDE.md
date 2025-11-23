# Portfolio Customization Guide

This guide will help you customize your portfolio with your personal information, projects, and styling preferences.

## 🎯 Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Add your bio and skills in About section
- [ ] Update work experience in Experience section
- [ ] Add your projects in Projects section
- [ ] Configure contact information
- [ ] Add profile image
- [ ] Add project screenshots
- [ ] Upload resume PDF
- [ ] Update social media links
- [ ] Configure EmailJS for contact form
- [ ] Test on different devices

---

## 1️⃣ Hero Section (Landing Page)

**File**: `src/sections/Hero.jsx`

### What to Update:

```javascript
// Line 57: Your greeting
<p className="...">Hi, my name is</p>

// Line 63: Your name
<h1 className="...">Aryan Surin.</h1>

// Line 70: Your tagline
<h2 className="...">I build exceptional digital experiences.</h2>

// Lines 77-84: Your introduction
<p className="...">
  I'm a <span>Full Stack Developer</span> specializing 
  in <span>Frontend Development</span>, with over 3 
  years of experience...
</p>
```

### Tips:
- Keep the tagline short and impactful (8-10 words)
- Mention your years of experience
- Highlight 2-3 key technologies you specialize in
- Make it compelling for both recruiters and clients

---

## 2️⃣ About Section

**File**: `src/sections/About.jsx`

### A. Update Bio Text

```javascript
// Lines 44-52: First paragraph
<p>
  Hello! I'm <span>Your Name</span>, 
  a passionate Full Stack Developer...
</p>

// Lines 57-65: Second paragraph - Technologies
<p>
  I specialize in building exceptional digital experiences using...
  <span>React</span>, <span>Vue.js</span>, and <span>Nuxt.js</span>
</p>

// Lines 70-78: Third paragraph - Personal touch
<p>
  When I'm not coding, you'll find me...
</p>
```

### B. Update Tech Stack

```javascript
// Lines 29-42: Add/remove technologies
const technologies = [
  'JavaScript (ES6+)',
  'React.js',
  'Vue.js',
  // Add your skills here
];
```

### C. Add Your Profile Image

**Option 1: Add image file**
1. Place your image in `public/` folder (e.g., `profile.jpg`)
2. Replace the placeholder div (lines 108-123) with:

```javascript
<img 
  src="/profile.jpg" 
  alt="Aryan Surin"
  className="w-full h-full object-cover"
/>
```

**Option 2: Keep placeholder**
- Update the initials "AS" to your initials (line 117)

---

## 3️⃣ Experience Section

**File**: `src/sections/Experience.jsx`

### Update Work History

```javascript
// Lines 23-66: Replace with your actual experience
const experiences = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    companyUrl: 'https://company-website.com',
    duration: 'Jan 2023 - Present',
    location: 'Remote / On-site / Hybrid',
    responsibilities: [
      'Your achievement or responsibility',
      'Use action verbs: Developed, Led, Optimized, Built',
      'Include metrics when possible (40% improvement, 15+ projects)',
      'Focus on impact and results',
      'Mention technologies used',
    ],
  },
  // Add more positions...
];
```

### Best Practices:
- **Start with action verbs**: Developed, Built, Led, Optimized, Implemented
- **Include metrics**: "Improved performance by 60%", "Led team of 4 developers"
- **Be specific**: Mention technologies and frameworks
- **Show impact**: Focus on results, not just tasks
- **Keep it concise**: 3-5 bullet points per role

### Update Statistics Badge (Line 149)

```javascript
<p className="...">3.9+</p>  // Your years of experience
<p className="...">15+</p>   // Projects completed
<p className="...">10+</p>   // Technologies mastered
```

---

## 4️⃣ Projects Section

**File**: `src/sections/Projects.jsx`

### Add Your Projects

```javascript
// Lines 24-64: Replace with your actual projects
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of your project. Mention the problem it solves, key features, and technologies used. Keep it between 60-100 words.',
    image: '/project1.jpg',  // Add image to public/ folder
    tech: ['React', 'Node.js', 'MongoDB'],  // Technologies used
    liveUrl: 'https://your-project.com',    // Live demo URL
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,  // Highlight important projects
  },
  // Add 3-6 projects total
];
```

### Adding Project Images

**Option 1: Use actual screenshots**
1. Take screenshots of your projects (1200x800px recommended)
2. Save them in `public/` folder (e.g., `project1.jpg`, `project2.jpg`)
3. Update the `image` field

**Option 2: Keep placeholders**
- The placeholder will show automatically if image path is invalid

### Project Description Tips:
- Start with what the project does
- Mention 2-3 key features
- Include the target audience
- Keep it concise (60-100 words)
- Use active voice

### Tech Stack:
- List 3-7 technologies
- Put the most important ones first
- Use proper capitalization (React, not react)

---

## 5️⃣ Contact Section

**File**: `src/sections/Contact.jsx`

### A. Update Contact Information

```javascript
// Line 187: Your email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// Line 199: Your location
<p>Available for remote work</p>
// or
<p>Based in City, Country</p>
```

### B. Update Social Links

```javascript
// Lines 209-214: Update your social media URLs
{
  Icon: FaGithub, 
  url: 'https://github.com/your-username',
  label: 'GitHub' 
},
{
  Icon: FaLinkedin, 
  url: 'https://linkedin.com/in/your-username',
  label: 'LinkedIn' 
},
{
  Icon: FaTwitter, 
  url: 'https://twitter.com/your-username',
  label: 'Twitter' 
},
{
  Icon: FaCodepen, 
  url: 'https://codepen.io/your-username',
  label: 'CodePen' 
},
```

### C. Configure EmailJS

**Steps:**

1. **Sign up for EmailJS**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Add Email Service**
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Use these variables in your template:
     ```
     From: {{name}} ({{email}})
     Subject: {{subject}}
     Message: {{message}}
     ```

4. **Update Contact.jsx**

```javascript
// Lines 102-104: Replace with your credentials
const SERVICE_ID = 'service_xxxxxxx';      // From EmailJS dashboard
const TEMPLATE_ID = 'template_xxxxxxx';    // From EmailJS dashboard
const PUBLIC_KEY = 'your_public_key';      // From Account > API Keys
```

5. **Test the form**
   - Fill out and submit the contact form
   - Check your email for the message
   - Check browser console for any errors

---

## 6️⃣ Footer

**File**: `src/components/Footer.jsx`

### Update Social Links

```javascript
// Lines 15-19: Update your social media URLs
const socialLinks = [
  { Icon: FaGithub, url: 'https://github.com/your-username', label: 'GitHub' },
  { Icon: FaLinkedin, url: 'https://linkedin.com/in/your-username', label: 'LinkedIn' },
  { Icon: FaTwitter, url: 'https://twitter.com/your-username', label: 'Twitter' },
];
```

### Update Copyright

The year automatically updates, but you can modify the text:

```javascript
// Line 35
<p>© {currentYear} Your Name. All rights reserved.</p>
```

---

## 7️⃣ Navbar

**File**: `src/components/Navbar.jsx`

### A. Update Logo

```javascript
// Line 77: Change logo text
<h1 className="...">{'<YI />'}</h1>
// or use your initials
<h1 className="...">{'<AS />'}</h1>
```

### B. Add Resume

**Option 1: Upload PDF**
1. Place your resume PDF in `public/` folder as `resume.pdf`
2. The link is already configured (line 118)

**Option 2: External Link**
```javascript
// Line 118: Change to external link
<a href="https://drive.google.com/your-resume-link">
  Resume
</a>
```

---

## 8️⃣ Styling Customization

### A. Change Color Scheme

**File**: `tailwind.config.js`

```javascript
colors: {
  navy: {
    DEFAULT: '#0a192f',    // Main dark background
    light: '#112240',      // Lighter sections
    lighter: '#233554',    // Borders/subtle elements
  },
  slate: {
    DEFAULT: '#8892b0',    // Secondary text
    light: '#a8b2d1',      // Tertiary text
    lightest: '#ccd6f6',   // Primary text
  },
  accent: {
    DEFAULT: '#64ffda',    // Highlight color (links, buttons)
    hover: '#52e3c2',      // Hover state
  },
},
```

### B. Change Fonts

**File**: `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],        // Body text
  mono: ['Fira Code', 'monospace'],                  // Code/numbers
},
```

**File**: `src/index.css` (line 1)

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700;800&display=swap');
```

---

## 9️⃣ SEO & Meta Tags

**File**: `index.html`

### Update Meta Information

```html
<!-- Line 6: Page title -->
<title>Your Name | Full Stack Developer</title>

<!-- Line 7: Description -->
<meta name="description" content="Your custom description here" />

<!-- Line 8: Keywords -->
<meta name="keywords" content="Your Name, Developer, React, etc" />

<!-- Line 9: Author -->
<meta name="author" content="Your Name" />

<!-- Lines 12-14: Social media previews -->
<meta property="og:title" content="Your Name - Full Stack Developer" />
<meta property="og:description" content="Your description" />
```

---

## 🔟 Testing Checklist

### Desktop Testing
- [ ] All sections display correctly
- [ ] Navigation links work smoothly
- [ ] Hover effects work on buttons/links
- [ ] Dark/light mode toggle works
- [ ] Contact form submits successfully
- [ ] All external links open in new tab
- [ ] Animations are smooth

### Mobile Testing (< 768px)
- [ ] Hamburger menu opens/closes
- [ ] All text is readable
- [ ] Buttons are easily clickable
- [ ] Images scale properly
- [ ] No horizontal scrolling
- [ ] Contact form is usable

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance Testing
- [ ] Page loads in < 3 seconds
- [ ] Images are optimized
- [ ] No console errors
- [ ] Smooth scrolling works

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Automatic deployments**: Every push to main branch auto-deploys

### Option 2: Netlify

1. Build your project: `npm run build`
2. Go to [netlify.com](https://www.netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Update package.json
{
  "homepage": "https://yourusername.github.io/my-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

---

## 💡 Pro Tips

### Content Writing
- Use active voice
- Keep sentences concise
- Highlight achievements with metrics
- Proofread for typos
- Get feedback from others

### Design
- Maintain consistent spacing
- Use high-quality images
- Stick to your color scheme
- Test on multiple devices
- Less is more (don't overcrowd)

### Performance
- Compress images (use TinyPNG)
- Keep animations subtle
- Lazy load images
- Test load times
- Optimize for mobile first

### SEO
- Use descriptive alt text for images
- Include relevant keywords naturally
- Create unique page title and description
- Add structured data (JSON-LD)
- Submit to Google Search Console

---

## 🆘 Need Help?

- Check the main [README.md](README.md)
- Review component comments in code
- Search for similar issues on GitHub
- Test in browser developer console

---

**Happy customizing! 🎨**
