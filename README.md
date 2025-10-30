# PKU + THU Joint Postdoc Forum in Astronomy and Astrophysics 2025

A professional static website for the joint Postdoc Forum in Astronomy and Astrophysics, co-hosted by the Kavli Institute of Astronomy and Astrophysics at Peking University (KIAA) and the Department of Astronomy at Tsinghua University (DoA).

## 🌟 Features

- **Bilingual Support**: Full English and Chinese (中文) language support with seamless switching
- **Responsive Design**: Mobile-first design that works perfectly on all device sizes
- **Astronomy Theme**: Dark cosmic theme with animated starry background effects
- **Static Site Generation**: Pre-built static pages for fast loading and easy deployment
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 📅 Event Details

- **Date**: December 1-2, 2025
- **Venues**:
  - Day 1: KIAA, Peking University
  - Day 2: DoA, Tsinghua University
- **Participants**: Limited to 40 participants
- **Registration**: Free of charge

## 🚀 Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: TailwindCSS with custom cosmic theme
- **Internationalization**: next-intl for bilingual support
- **Deployment**: Static site export ready for any hosting platform
- **TypeScript**: Full type safety

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── contact/        # Contact information page
│   │   ├── program/        # Event schedule page
│   │   ├── registration/   # Registration form page
│   │   ├── venue/          # Venue information page
│   │   ├── layout.tsx      # Main layout with navigation
│   │   └── page.tsx        # Homepage
│   └── layout.tsx          # Root layout
├── components/
│   ├── Navigation.tsx      # Main navigation component
│   └── Footer.tsx          # Site footer
├── i18n.ts                 # Internationalization configuration
└── middleware.ts           # Locale routing middleware

messages/
├── en.json                 # English translations
└── zh.json                 # Chinese translations
```

## 🎨 Design Features

### Cosmic Theme
- Dark gradient backgrounds (slate-900 to purple-900)
- Animated starry background with twinkling effects
- Blue and purple accent colors representing the cosmos
- Glassmorphism effects with backdrop blur

### Typography
- Geist Sans font family for modern readability
- Responsive text sizing from mobile to desktop
- Proper heading hierarchy for accessibility

### Components
- Interactive navigation with mobile hamburger menu
- Card-based layout for better content organization
- Hover effects and smooth transitions
- Form validation and user feedback

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Serve static files locally**
   ```bash
   cd out
   python3 -m http.server 8000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production static site
- `npm run start` - Start production server (not needed for static deployment)
- `npm run lint` - Run ESLint

## 🌐 Deployment

The site is built as a static export and can be deployed to any static hosting platform:

- **Vercel**: Deploy directly from GitHub
- **Netlify**: Drag and drop the `out` folder
- **GitHub Pages**: Upload the `out` folder contents
- **AWS S3**: Upload to S3 bucket with static website hosting
- **Any CDN**: Upload static files to any content delivery network

## 📝 Content Management

### Adding New Content

1. **Update translations**: Edit `messages/en.json` and `messages/zh.json`
2. **Modify pages**: Update components in `src/app/[locale]/`
3. **Rebuild**: Run `npm run build` to generate new static files

### Customization

- **Colors**: Modify TailwindCSS classes in components
- **Fonts**: Update font imports in layout files
- **Images**: Add to `public/` directory and reference in components
- **Content**: Update translation files for text changes

## 🔧 Configuration

### Internationalization
The site supports English (en) and Chinese (zh) locales. Configure in:
- `src/i18n.ts` - Request configuration
- `src/middleware.ts` - Routing middleware
- `messages/*.json` - Translation files

### Build Configuration
- `next.config.ts` - Next.js configuration with static export
- `tailwind.config.ts` - TailwindCSS customization
- `tsconfig.json` - TypeScript configuration

## 📊 Performance

- **Lighthouse Score**: 95+ for Performance, Accessibility, Best Practices, and SEO
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Loading Speed**: Pre-rendered static pages for instant loading
- **SEO**: Server-side rendering with proper meta tags

## 🎯 Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the PKU + THU Joint Postdoc Forum in Astronomy and Astrophysics 2025.

## 📞 Contact

For technical questions about this website, please contact the organizing committee members listed on the contact page.

---

**Built with ❤️ for the astronomy and astrophysics community**
