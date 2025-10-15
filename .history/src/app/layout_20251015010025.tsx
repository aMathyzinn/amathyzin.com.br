import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ParticleBackground } from '@/components/effects/ParticleBackground'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { Suspense } from 'react'

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
  openGraph: {
    title: 'aMathyzin - Melhores Otimizações Gratuitas',
    description: 'Melhore a velocidade e o desempenho do seu PC e sistemas com nossas otimizações gratuitas.',
    url: 'https://amathyzin.com.br',
    siteName: 'aMathyzin',
    images: [
      {
        url: 'https://amathyzin.com.br/img/thumb.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aMathyzin - Melhores Otimizações Gratuitas',
    description: 'Acesse dicas, truques e ferramentas exclusivas para acelerar e otimizar o desempenho do seu PC.',
    images: ['https://amathyzin.com.br/img/thumb.png'],
    creator: '@amathyzin',
  },
  icons: {
    icon: 'https://amathyzin.com.br/logo.png',
    apple: 'https://amathyzin.com.br/logo.png',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-dark text-white overflow-x-hidden`}>
        <LoadingScreen />
        <ParticleBackground />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}