import type { Metadata } from 'next'
import ClientPage from './ClientPage'

export default function AboutPage() {
  return <ClientPage />
}

export const metadata: Metadata = {
  title: 'Sobre – aMathyzin',
  description: 'Conheça a história, missão e comunidade do aMathyzin. Projetos, números e valores que movem nossas otimizações gratuitas.',
  alternates: { canonical: '/sobre/' },
  openGraph: {
    title: 'Sobre – aMathyzin',
    description: 'História, missão e comunidade por trás das otimizações gratuitas.',
    url: 'https://amathyzin.com.br/sobre/',
    type: 'website',
    images: [{ url: '/imgs/logo.webp', width: 1200, height: 630, alt: 'aMathyzin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre – aMathyzin',
    description: 'Conheça nossa missão e comunidade.',
    images: ['/imgs/logo.webp'],
  },
  robots: { index: true, follow: true },
}