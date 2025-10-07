# Thesistant 🎓

A professional, modern web application for thesis and research paper consulting services. Built with cutting-edge technologies and designed with enterprise-grade UI/UX.

## 🌟 About Thesistant

Thesistant is a consulting company that helps students write thesis and research papers. We provide:
- Expert consulting on methodology and experiments
- Complete guidance from topic selection to thesis defense
- Personalized support based on your field and proficiency
- Professional assistance in finding the perfect research title

## 🚀 Tech Stack

- **React 18** - UI library with TypeScript
- **Vite** - Lightning-fast build tool
- **Material-UI (MUI)** - Professional component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth, interactive animations
- **React Router DOM** - Client-side routing
- **Zustand** - Lightweight state management
- **Jotai** - Atomic state management
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **Lucide React** - Beautiful icon library

## ✨ Features

### 🎨 Professional UI/UX
- Smooth, interactive animations powered by Framer Motion
- Responsive design that works on all devices
- Custom color palette integrated throughout
- Enterprise-grade visual design

### 🎯 Landing Page Sections
1. **Hero Section** - Compelling introduction with animated elements and trust indicators
2. **Services** - Showcase of all consulting services with interactive cards
3. **Process Timeline** - Visual journey from consultation to defense
4. **Navbar** - Smooth scrolling navigation with mobile drawer

### 🌊 Animations & Interactions
- Parallax scrolling effects
- Hover animations on cards and buttons
- Staggered entrance animations
- Floating elements with continuous motion
- Smooth page transitions

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with scroll effects
│   ├── Hero.tsx            # Landing hero section
│   ├── Services.tsx        # Services showcase
│   ├── Process.tsx         # Journey timeline
│   └── ExampleForm.tsx     # Form with validation
├── pages/
│   ├── LandingPage.tsx     # Main landing page
│   ├── About.tsx           # About page
│   └── Home.tsx            # Legacy redirect
├── stores/
│   ├── appStore.ts         # Zustand store
│   └── atoms.ts            # Jotai atoms
├── hooks/
│   └── useLocalStorage.ts  # Custom hooks
├── utils/
│   └── helpers.ts          # Utility functions
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
├── theme.ts                # Custom MUI theme
└── index.css               # Global styles
```

## 🎨 Color Palette

Custom blue gradient palette defined in `colourpalette.txt`:
- Primary: `#10a2e0`
- Dark: `#0b446c`, `#0a4168`, `#0d608e`
- Light: `#6bd3fe`, `#41bff5`

Integrated into both MUI theme and Tailwind configuration.

## 🎯 Key Components

### Navbar
- Smooth scroll behavior
- Transparent to solid on scroll
- Mobile-responsive drawer
- Animated logo and buttons

### Hero Section
- Animated gradient backgrounds
- Floating decorative elements
- Statistics showcase
- Multiple CTAs
- Trust indicators

### Services
- Interactive service cards
- Feature lists with icons
- Hover animations
- Responsive grid layout

### Process Timeline
- Step-by-step journey visualization
- Alternating layout on desktop
- Animated icons
- CTA section

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Next Steps

The foundation is complete! You can now:
1. Add more pages (Contact, Blog, etc.)
2. Integrate contact forms with backend
3. Add more interactive features
4. Implement testimonials section
5. Add blog/resources section

## � License

MIT
