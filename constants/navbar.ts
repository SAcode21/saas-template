interface NavLink {
  href: string
  text: string
}

interface Logo {
  src: string
  alt: string
  width: number
  height: number
}

interface ThemeButton {
  soundEffect: string
  transitionDuration: number
}

interface Navbar {
  logo: Logo
  companyName: string
  navigation: NavLink[]
  themeButton: ThemeButton
}

export const NAVBAR_CONSTANT: Navbar = {
  logo: {
    src: '/images/logo/logo.png',
    alt: 'Logo',
    width: 30,
    height: 30,
  },
  companyName: 'Startup',
  navigation: [
    { href: '#features', text: 'Features' },
    { href: '#pricing', text: 'Pricing' },
  ],
  themeButton: {
    soundEffect: '/audio/light-switch.mp3',
    transitionDuration: 700,
  },
}
