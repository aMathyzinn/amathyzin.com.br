'use client'

import Link from 'next/link'
import { FaGithub, FaYoutube, FaDiscord, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function Footer() {
  const socialLinks = [
    { href: 'https://github.com/amathyzin', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.youtube.com/@aMathyzin', icon: FaYoutube, label: 'YouTube' },
    { href: 'https://discord.gg/WYbPYDhQ8y', icon: FaDiscord, label: 'Discord' },
  ]

  const footerLinks = [
    { href: '/termos', label: 'Termos de Serviço' },
    { href: '/privacidade', label: 'Política de Privacidade' },
  ]

  return (
    <footer className="relative bg-gradient-dark border-t-2 border-secondary">
      <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent opacity-50" />
      
      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-8"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/70 hover:text-primary transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm"
        >
          {footerLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link 
                href={link.href}
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="mx-4 text-white/30">|</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white/60 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} aMathyzin. Todos os direitos reservados.
            <FaHeart className="text-primary animate-pulse" size={14} />
          </p>
          <p className="text-white/40 text-xs mt-2">
            Desenvolvido com Next.js e TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  )
}