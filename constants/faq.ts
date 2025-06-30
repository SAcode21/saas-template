interface FAQItem {
  id: string
  question: string
  answer: string
  hasLink?: boolean
  linkText?: string
  linkUrl?: string
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'item-1',
    question: 'Who built this beautiful template?',
    answer: " - you're neighbourhood frontend developer :p",
    hasLink: true,
    linkText: 'Rishit Gupta 😊',
    linkUrl: 'https://www.linkedin.com/in/rishit-gupta-4b18841b1/',
  },
  {
    id: 'item-2',
    question: 'Can I use it for my SaaS project?',
    answer:
      "Yes. It's available on GitHub and you can use it for your SaaS project.",
  },
  {
    id: 'item-3',
    question: 'Can the developer help me with my SaaS project?',
    answer: 'Yes, reach out to me on rishitgupta2013@gmail.com',
  },
]
