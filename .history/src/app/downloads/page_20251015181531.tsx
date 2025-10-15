import type { Metadata } from 'next'
import ClientPage from './ClientPage'

export default function DownloadsPage() {
  return <ClientPage />
}

export const metadata: Metadata = {
  title: 'Downloads – Ferramentas e Otimizações | aMathyzin',
  description: 'Explore todas as ferramentas, packs e otimizadores gratuitos do aMathyzin. Filtre por categoria e encontre a solução ideal para seu PC e jogos.',
  keywords: 'downloads, otimização, ferramentas, Windows, jogos, performance',
  alternates: { canonical: '/downloads/' },
  openGraph: {
    title: 'Centro de Downloads – aMathyzin',
    description: 'Listagem completa de projetos e ferramentas gratuitas para otimizar seu PC e games.',
    url: 'https://amathyzin.com.br/downloads/',
    type: 'website',
    images: [{ url: '/imgs/logo.webp', width: 1200, height: 630, alt: 'aMathyzin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro de Downloads – aMathyzin',
    description: 'Descubra projetos gratuitos para otimizar seu PC e jogos.',
    images: ['/imgs/logo.webp'],
  },
  robots: { index: true, follow: true },
}