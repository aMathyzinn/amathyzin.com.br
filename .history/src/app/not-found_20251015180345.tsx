'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [glitchText, setGlitchText] = useState('404')

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
        const position = Math.floor(Math.random() * 3)
        const text = '404'.split('')
        text[position] = randomChar
        setGlitchText(text.join(''))
        setTimeout(() => setGlitchText('404'), 100)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
        >
          <div className="w-full h-full bg-gradient-conic from-primary/10 via-secondary/10 to-primary/10" />
        </motion.div>
      </div>

      <div className="container-custom mx-auto px-4 text-center z-10">
        {/* Glitch Effect 404 */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none relative">
            <span className="text-gradient">{glitchText}</span>
            <motion.span
              animate={{
                opacity: [0, 1, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute inset-0 text-secondary/50"
              style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 55%, 0 55%)' }}
            >
              404
            </motion.span>
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaExclamationTriangle className="text-3xl text-accent animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">Página Não Encontrada</h2>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ops! Parece que você encontrou uma página que não existe ou foi movida. 
            Que tal explorar nossos projetos incríveis?
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-white/60 mb-4">Páginas populares:</p>
          <div className="flex flex-wrap gap-2 justify-center">
wwwww            {[
              { href: '/downloads/', label: 'Downloads' },
              { href: '/sobre/', label: 'Sobre' },
              { href: 'https://discord.gg/XBajMu5dcr', label: 'Discord' },
              { href: 'https://www.youtube.com/@aMathyzin', label: 'YouTube' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/" className="btn-primary shine-effect">
            <FaHome />
            Voltar ao Início
          </Link>
          <Link href="/downloads/" className="btn-secondary">
            <FaSearch />
            Explorar Downloads
          </Link>
        </motion.div>

        {/* Fun Animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mt-12"
        >
          <p className="text-white/40 text-sm">
            💡 Dica: Use o menu de navegação para encontrar o que procura
          </p>
        </motion.div>
      </div>
    </div>
  )
}