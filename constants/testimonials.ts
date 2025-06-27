interface Review {
  name: string
  username: string
  body: string
  img: string
  social: string
}

interface Testimonials {
  reviews: Review[]
}

export const TESTIMONIALS_CONSTANT: Testimonials = {
  reviews: [
    {
      name: 'Jack',
      username: '@jack',
      body: 'This is awesome! I love how easy it is to use.',
      img: '/images/testimonial/testimonial-1.jpg',
      social: 'https://x.com/rishit30g',
    },
    {
      name: 'Smith',
      username: '@smith',
      body: 'Fase. Easy and Intutive.',
      img: '/images/testimonial/testimonial-2.jpg',
      social: 'https://www.linkedin.com/in/rishit-gupta-4b18841b1/',
    },
    {
      name: 'Sarah',
      username: '@sarah',
      body: 'I love the design and the ease of use.',
      img: '/images/testimonial/testimonial-3.jpg',
      social: 'https://facebook.com',
    },
    {
      name: 'Jessy',
      username: '@jessy',
      body: 'This is the best website I have ever used.',
      img: '/images/testimonial/testimonial-4.jpg',
      social: 'https://threads.com',
    },
  ],
}
