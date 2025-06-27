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
  title: 'This template is built for SaaS owners',
  description: 'Create your SaaS with this template in hours, not days.',
  buttonText: "Let's Explore",
  videoConfig: {
    videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=gcHuOpFRg38gbu4J',
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
