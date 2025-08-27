'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'

export function YouTubeChannel() {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Channel Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inscreva-se no nosso canal no YouTube!
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Fique por dentro das novidades, dicas e tutoriais exclusivos para otimizar o seu PC.
            </p>
            
            <Link
              href="/youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex shine-effect mb-8"
            >
              <FaYoutube />
              Inscreva-se Agora
            </Link>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <motion.a
                href="https://www.youtube.com/@aMathyzin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-white/70 hover:text-primary transition-colors"
              >
                <FaYoutube />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/amathyzin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-white/70 hover:text-primary transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://twitter.com/amathyzin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-white/70 hover:text-primary transition-colors"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          {/* Channel Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group perspective-1000"
          >
            <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-12">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-1 rounded-2xl">
                <div className="bg-dark rounded-xl overflow-hidden">
                  {/* Placeholder for channel screenshot */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <FaYoutube className="text-6xl text-primary/50 mb-4 mx-auto" />
                      <p className="text-2xl font-bold text-white/80">@aMathyzin</p>
                      <p className="text-white/60 mt-2">+5K Inscritos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}