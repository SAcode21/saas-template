import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import { Analytics } from '@vercel/analytics/next'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SaaS Template',
  description:
    'A modern startup landing page template built with Next.js and Tailwind CSS.',
  keywords: [
    'SaaS Template',
    'Next.js',
    'Tailwind CSS',
    'Startup Template',
    'Landing Page',
    'Web Development',
    'Free Template',
    'Open Source',
    'Frontend Development',
    'Modern Design',
    'Responsive Design',
    'UI/UX Design',
  ],
  openGraph: {
    title: 'SaaS Template',
    description:
      'A modern startup landing page template built with Next.js and Tailwind CSS.',
    siteName: 'SaaS Template',
    images: [
      {
        url: 'https://i.postimg.cc/RVWPD9Yp/Screenshot-2025-06-27-at-12-59-03-PM.png',
        width: 1200,
        height: 630,
        alt: 'SaaS Template',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Template',
    description:
      'A modern startup landing page template built with Next.js and Tailwind CSS.',
    images: [
      'https://i.postimg.cc/RVWPD9Yp/Screenshot-2025-06-27-at-12-59-03-PM.png',
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geist.className}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='min-h-screen container mx-auto px-4'>
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
