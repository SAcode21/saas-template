interface CTA {
  title: string
  description: string
  buttonText: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export const CTA_CONSTANT: CTA = {
  title: 'Need a SaaS website?',
  description: 'Lets get started with this awesome template.',
  buttonText: 'Get Started',
  image: {
    src: '/images/cta/duck.png',
    alt: 'Duck',
    width: 500,
    height: 500,
  },
}
