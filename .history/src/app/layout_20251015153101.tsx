import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import ParticleBackgroundClient from '@/components/dynamic/ParticleBackgroundClient'
import ShaderBackgroundClient from '@/components/dynamic/ShaderBackgroundClient'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'aMathyzin - Otimizações Grátis para PC',
  description: 'aMathyzin oferece dicas, truques e ferramentas exclusivas para melhorar a velocidade e o desempenho do seu PC e sistemas. Descubra downloads, otimizações e soluções gratuitas para potencializar seu computador.',
  keywords: 'aMathyzin, downloads, otimizações, performance, velocidade, PC, sistemas, tecnologia, gratuitas',
  authors: [{ name: 'aMathyzin' }],
  metadataBase: new URL('https://amathyzin.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'aMathyzin - Melhores Otimizações Gratuitas',
    description: 'Melhore a velocidade e o desempenho do seu PC e sistemas com nossas otimizações gratuitas.',
    url: 'https://amathyzin.com.br',
    siteName: 'aMathyzin',
    images: [
      {
        url: '/imgs/logo.webp',
        width: 1200,
        height: 630,
        alt: 'aMathyzin',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aMathyzin - Melhores Otimizações Gratuitas',
    description: 'Acesse dicas, truques e ferramentas exclusivas para acelerar e otimizar o desempenho do seu PC.',
    images: ['/imgs/logo.webp'],
    creator: '@amathyzin',
  },
  icons: {
    icon: '/imgs/logo.svg',
    apple: '/imgs/logo.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className={`${poppins.className} bg-dark text-white overflow-x-hidden`}>
        <ShaderBackgroundClient />
        <ParticleBackgroundClient />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}