interface VideoConfig {
  videoSrc: string
  lightThumbnail: {
    src: string
    alt: string
  }
  darkThumbnail: {
    src: string
    alt: string
  }
}

interface HeroConfig {
  title: string
  description: string
  buttonText: string
  videoConfig: VideoConfig
}

export const HERO: HeroConfig = {
  title: 'Gronosh',
  description: 'Towards Green, Growth & Nourishment',
  buttonText: "Let's Explore",
  videoConfig: {
    videoSrc:
      'https://www.canva.com/design/DAFuVHXVULw/7T56Zd98AWYmSo6scz1VGQ/edit',
    lightThumbnail: {
      src: 'https://startup-template-sage.vercel.app/hero-light.png',
      alt: 'Hero Video',
    },
    darkThumbnail: {
      src: 'https://startup-template-sage.vercel.app/hero-dark.png',
      alt: 'Hero Video',
    },
  },
}
