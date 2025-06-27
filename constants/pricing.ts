interface PricingPlan {
  name: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
  features: {
    text: string
    included: boolean
  }[]
  buttonText: string
  buttonVariant: 'default' | 'secondary'
  isPopular?: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    description: 'Perfect for individuals and small teams.',
    monthlyPrice: '$20/mo',
    yearlyPrice: '$18/mo',
    features: [
      { text: '5GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Access to portal', included: true },
      { text: 'Community support', included: false },
      { text: 'Advance analytics', included: false },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
  },
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams.',
    monthlyPrice: '$40/mo',
    yearlyPrice: '$32/mo',
    features: [
      { text: '10GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Access to portal', included: true },
      { text: 'Community support', included: true },
      { text: 'Advance analytics', included: false },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'default',
    isPopular: true,
  },
  {
    name: 'Pro',
    description: 'Perfect for individuals and small teams.',
    monthlyPrice: '$80/mo',
    yearlyPrice: '$75/mo',
    features: [
      { text: '20GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Access to portal', included: true },
      { text: 'Community support', included: true },
      { text: 'Advance analytics', included: true },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
  },
]

export const PRICING_DISCOUNT: string = 'Save 20%'
