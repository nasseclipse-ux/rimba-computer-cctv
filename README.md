# Rimba Computer & CCTV Website

A professional landing page website for Rimba Computer & CCTV, a computer repair and security system installation shop located in Bekasi, Indonesia.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Hero Section**: Eye-catching hero with business highlights and call-to-action buttons
- **Services Section**: Comprehensive list of services including computer repair, gaming PC assembly, CCTV installation, and more
- **Customer Reviews**: Display of customer testimonials with 4.8-star rating
- **Contact Section**: Contact form, business information, and embedded Google Map
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## Services Offered

- **Computer Repair**: Professional repair services for all types of computers and laptops
- **Gaming PC Assembly**: Custom-built gaming PCs tailored to your budget and performance needs
- **CCTV Installation**: Professional CCTV security system installation and configuration
- **Data Recovery**: Recover lost data from damaged hard drives and storage devices
- **Component Upgrades**: RAM, SSD, and other component upgrades
- **Security Solutions**: Complete security system setup and monitoring

## Business Information

- **Phone**: 0822-1052-7872
- **Address**: Jl. Raya Setu, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
- **Hours**: Open Daily • Closes at 21:00
- **Rating**: 4.8/5 (34 Reviews)

## Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd rimba_computer
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
rimba_computer/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Reviews.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Components

### Header
Navigation bar with logo, menu links, and call-to-action button.

### Hero
Main hero section with business highlights, ratings, and call-to-action buttons.

### Services
Grid display of all services offered with icons and descriptions.

### Reviews
Customer testimonials and ratings section with Google Maps review link.

### Contact
Contact form, business information, and embedded Google Map.

### Footer
Footer with links, contact information, and social media icons.

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',
      secondary: '#1e40af',
    },
  },
}
```

### Content
Update business information in the respective component files:
- Phone number in `Header.tsx` and `Contact.tsx`
- Address in `Hero.tsx` and `Contact.tsx`
- Services in `Services.tsx`
- Reviews in `Reviews.tsx`

## Deployment

The website can be deployed to various platforms:

- **Vercel**: Recommended for Vite projects
- **Netlify**: Supports Vite builds
- **GitHub Pages**: With proper configuration
- **Traditional Web Hosting**: Upload the `dist` folder contents

## License

This project is proprietary and belongs to Rimba Computer & CCTV.

## Support

For inquiries or support, please contact:
- **Phone**: 0822-1052-7872
- **Address**: Jl. Raya Setu, Telajung, Bekasi, Indonesia
