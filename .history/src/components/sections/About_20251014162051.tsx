'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt, FaCode, FaRocket, FaUsers, FaYoutube } from 'react-icons/fa'

const features = [
  {
    icon: FaCode,
    title: '4+ Anos de Experiência',
    description: 'Compartilhando conhecimento e otimizações desde 2020',
  },
  {
    icon: FaRocket,
    title: 'Performance Garantida',
    description: 'Otimizações testadas e aprovadas por milhares de usuários',
  },
  {
    icon: FaUsers,
    title: 'Comunidade Ativa',
    description: 'Discord com suporte, sorteios e conteúdos exclusivos',
  },
  {
    icon: FaYoutube,
    title: 'Tutoriais em Vídeo',
    description: 'Canal no YouTube com guias detalhados e demonstrações',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-darker/50">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Sobre a aMathyzin
          </h2>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-white/80 mb-6">
            aMathyzin é um entusiasta de otimização com mais de 4 anos de experiência, 
            compartilhando dicas, truques e ferramentas exclusivas para extrair o máximo dos seus PCs.
          </p>
          <p className="text-2xl font-bold text-gradient mb-6">
            AMATHYZIN.COM.BR
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition-all duration-300"
            >
              <feature.icon className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-dark rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Nossas Conquistas</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            <motion.p 
              className="flex items-start gap-3"
              whileHover={{ x: 10 }}
            >
              <span className="text-secondary mt-1">▸</span>
              <span className="text-white/80">
                No GitHub, disponibilizamos projetos como o &ldquo;aMathyzin 3K Pack&rdquo; para melhorar o desempenho do Windows.
              </span>
            </motion.p>
            <motion.p 
              className="flex items-start gap-3"
              whileHover={{ x: 10 }}
            >
              <span className="text-secondary mt-1">▸</span>
              <span className="text-white/80">
                Desenvolvemos o &ldquo;RoBooster&rdquo;, um otimizador para Roblox integrado ao BloxStrap.
              </span>
            </motion.p>
            <motion.p 
              className="flex items-start gap-3"
              whileHover={{ x: 10 }}
            >
              <span className="text-secondary mt-1">▸</span>
              <span className="text-white/80">
                Nossa comunidade conta com um servidor no Discord, onde há suporte, sorteios e conteúdos exclusivos.
              </span>
            </motion.p>
            <motion.p 
              className="flex items-start gap-3"
              whileHover={{ x: 10 }}
            >
              <span className="text-secondary mt-1">▸</span>
              <span className="text-white/80">
                No YouTube, vídeos como &ldquo;OTIMIZE SEU PC COM 1 COMANDO EM 1 MINUTO&rdquo; demonstram otimizações rápidas e eficazes.
              </span>
            </motion.p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link href="/discord" className="btn-primary shine-effect">
            <FaExternalLinkAlt />
            COMUNIDADE OFICIAL
          </Link>
        </motion.div>
      </div>
    </section>
  )
}