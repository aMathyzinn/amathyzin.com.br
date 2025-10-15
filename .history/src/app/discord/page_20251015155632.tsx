'use client'

import { useEffect } from 'react'
import { FaDiscord } from 'react-icons/fa'

const INVITE_URL = 'https://discord.gg/XBajMu5dcr'

 

export default function DiscordRedirectPage() {
  useEffect(() => {
    // Redireciona imediatamente ao carregar a página
    window.location.replace(INVITE_URL)
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-gradient-dark">
      <div className="container-custom mx-auto text-center py-24">
        <div className="card-gradient rounded-2xl p-8 border border-white/10 max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaDiscord className="text-3xl text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold">Redirecionando para o Discord…</h1>
          </div>
          <p className="text-white/70 mb-6">Se não redirecionar automaticamente, clique no botão abaixo.</p>
          <a href={INVITE_URL} className="btn-primary inline-flex items-center justify-center gap-2">
            <FaDiscord />
            Entrar no Discord
          </a>
        </div>
      </div>
    </div>
  )
}