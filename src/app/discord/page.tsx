import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

const INVITE_URL = 'https://discord.gg/XBajMu5dcr'

export const metadata: Metadata = {
  title: 'Discord – aMathyzin',
  description: 'Entre no nosso servidor do Discord para suporte, novidades e comunidade.',
  alternates: { canonical: '/discord/' },
  openGraph: {
    title: 'Discord – aMathyzin',
    description: 'Comunidade oficial do aMathyzin no Discord.',
    url: 'https://amathyzin.com.br/discord/',
    type: 'website',
    images: [{ url: '/imgs/logo.webp', width: 1200, height: 630, alt: 'aMathyzin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord – aMathyzin',
    description: 'Junte-se à comunidade oficial no Discord.',
    images: ['/imgs/logo.webp'],
  },
  robots: { index: false, follow: true },
}

export default function DiscordRedirectPage() {
  redirect(INVITE_URL)
}