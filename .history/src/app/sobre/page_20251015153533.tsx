'use client'

import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaYoutube, FaDiscord, FaTrophy, FaUsers, FaCode, FaRocket } from 'react-icons/fa'
import Image from 'next/image'

const timeline = [
  {
    year: '2020',
    title: 'Início da Jornada',
    description: 'Começamos compartilhando dicas de otimização no YouTube',
  },
  {
    year: '2021',
    title: 'Primeiros Packs',
    description: 'Lançamento dos primeiros packs de otimização para Windows',
  },
  {
    year: '2022',
    title: 'Comunidade Discord',
    description: 'Criação do servidor Discord oficial com mais de 1000 membros',
  },
  {
    year: '2023',
    title: 'RoBooster',
    description: 'Desenvolvimento do RoBooster para otimização do Roblox',
  },
  {
    year: '2024',
    title: 'Expansão',
    description: 'Mais de 7.5K inscritos e 300K+ downloads dos nossos packs',
  },
]

const stats = [
  { icon: FaUsers, value: '7.5K+', label: 'Inscritos' },
  { icon: FaCode, value: '20+', label: 'Projetos' },
  { icon: FaTrophy, value: '300K+', label: 'Downloads' },
  { icon: FaRocket, value: '4+', label: 'Anos' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Sobre <span className="text-gradient">aMathyzin</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Conheça nossa história, missão e o que nos motiva a criar as melhores 
            otimizações para PC. aMathyzin é um projeto independente focado em otimização de sistemas,
            criado por um entusiasta com anos de experiência em melhorar desempenho, reduzir lag e otimizar jogos.
            Nosso trabalho inclui packs de otimização, ferramentas como RoBooster e guias passo-a-passo para resolver
            problemas comuns em jogos como Valorant.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  aMathyzin começou como um canal no YouTube em 2020, com o objetivo simples 
                  de ajudar pessoas a otimizar seus computadores e melhorar a performance em jogos.
                </p>
                <p>
                  O que começou como tutoriais básicos rapidamente evoluiu para o desenvolvimento 
                  de ferramentas próprias, packs de otimização personalizados e uma comunidade 
                  engajada de entusiastas de tecnologia.
                </p>
                <p>
                  Hoje, mantemos uma comunidade ativa no Discord, canal no YouTube com tutoriais e um repositório
                  público onde disponibilizamos alguns projetos e packs. Buscamos sempre transparência e suporte direto
                  para nossa comunidade.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-dark/50 rounded-xl"
                    >
                      <stat.icon className="text-3xl text-primary mx-auto mb-2" />
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <p className="text-white/60 text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Nossa <span className="text-gradient">Trajetória</span>
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="flex-1" />
                    <div className="w-4 h-4 bg-primary rounded-full z-10" />
                    <div className="flex-1">
                      <div className={`p-6 bg-dark/50 rounded-xl ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                        <span className="text-primary font-bold">{item.year}</span>
                        <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-gradient text-center"
            >
              <FaRocket className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
              <p className="text-white/70">
                Democratizar o acesso a otimizações de qualidade, ajudando todos a 
                extrair o máximo de seus computadores.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-gradient text-center"
            >
              <FaCode className="text-4xl text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nossa Visão</h3>
              <p className="text-white/70">
                Ser a principal referência em otimização de PC no Brasil, com ferramentas 
                inovadoras e uma comunidade forte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-gradient text-center"
            >
              <FaUsers className="text-4xl text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nossos Valores</h3>
              <p className="text-white/70">
                Transparência, qualidade, inovação e compromisso com nossa comunidade 
                são os pilares do nosso trabalho.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-dark rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Faça Parte da Nossa <span className="text-gradient">Comunidade</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de usuários que já transformaram seus PCs com nossas otimizações
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/discord" className="btn-primary shine-effect">
                <FaDiscord />
                Discord
              </Link>
              <a href="/youtube" target="_blank" rel="noopener noreferrer" className="btn-primary shine-effect">
                <FaYoutube />
                YouTube
              </a>
              <Link href="/github" className="btn-primary shine-effect">
                <FaGithub />
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
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