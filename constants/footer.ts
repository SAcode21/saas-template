interface SocialLink {
  href: string
  ariaLabel: string
}

interface NavLink {
  href: string
  text: string
}

interface NavSection {
  title: string
  links: NavLink[]
}

interface Logo {
  src: string
  alt: string
  width: number
  height: number
}

interface Footer {
  logo: Logo
  companyName: string
  description: string
  socialLinks: {
    twitter: SocialLink
    linkedin: SocialLink
    instagram: SocialLink
    threads: SocialLink
  }
  navigation: NavSection[]
  copyright: string
  legalLinks: NavLink[]
}

export const FOOTER_CONSTANT: Footer = {
  logo: {
    src: '/images/logo/logo.png',
    alt: 'Logo',
    width: 30,
    height: 30,
  },
  companyName: 'Rishit',
  description:
    'We are a team of passionate developers dedicated to building amazing web applications. We love creating user-friendly interfaces.',
  socialLinks: {
    twitter: {
      href: 'https://x.com/rishit30g',
      ariaLabel: 'Follow us on X (Twitter)',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/rishit-gupta-4b18841b1/',
      ariaLabel: 'Connect with us on LinkedIn',
    },
    instagram: {
      href: '#',
      ariaLabel: 'Follow us on Instagram',
    },
    threads: {
      href: '#',
      ariaLabel: 'Follow us on Threads',
    },
  },
  navigation: [
    {
      title: 'Product',
      links: [
        { href: '#', text: 'Features' },
        { href: '#', text: 'Pricing' },
        { href: '#', text: 'Integrations' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '#', text: 'Docs' },
        { href: '#', text: 'Blog' },
        { href: '#', text: 'Support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '#', text: 'Careers' },
        { href: '#', text: 'Contact' },
        { href: '#', text: 'About Us' },
      ],
    },
  ],
  copyright: '© 2025 Company. All rights reserved.',
  legalLinks: [
    { href: '#', text: 'Privacy Policy' },
    { href: '#', text: 'Terms of Service' },
    { href: '#', text: 'Cookie Policy' },
  ],
}
