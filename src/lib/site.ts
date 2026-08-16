export const siteConfig = {
  name: "DMrush Learn",
  shortName: "DMrush Learn",
  institute: "DMrush Institute",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://learn.dmrush.com",
  agencyUrl: "https://dmrush.com",
  agencyLabel: "DMrush Agency",
  email: "learn@dmrush.com",
  phone: "+923017786667",
  phoneDisplay: "+92 301 7786667",
  whatsappUrl: "https://wa.me/923017786667",
  address: "Flat # 101 Burj AlGhori Plaza, Faisal Colony Pattoki",
  social: [
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/dmrushofficial/" },
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@DMRushofficial" },
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/dmrushofficial/" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/dm-rush-institute" },
  ],
  locale: "en_US",
  tagline: "Practical digital skills for modern careers.",
  description:
    "DMrush Institute offers live physical classes in SEO, WordPress, Shopify, AI tools, digital marketing, and AI website building — with online notes, assignments, attendance, and certificates.",
} as const;

export const publicNav = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Instructors", href: "/instructors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
