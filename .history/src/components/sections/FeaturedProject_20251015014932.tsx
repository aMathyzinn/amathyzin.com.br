"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaInfoCircle, FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import LazyImage from '@/components/ui/LazyImage'

export function FeaturedProject() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const featuredPlaceholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#101018"/>
          <stop offset="100%" stop-color="#1a1a24"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <text x="50%" y="50%" fill="#bbb" font-family="sans-serif" font-size="28" text-anchor="middle" dominant-baseline="middle">Imagem do projeto</text>
    </svg>`
  )
  const project = {
    title: 'aMathyBoost — Otimizador Avançado',
    description:
      'aMathyBoost é uma suíte de otimizações para Windows focada em desempenho em jogos e produtividade. Inclui ajustes de sistema, perfis de otimização, e integrações com ferramentas de limpeza e benchmark. Perfeito para usuários que querem extrair o máximo do hardware sem complicação.',
    image: featuredPlaceholder,
    tags: ['Performance', 'Windows', 'CLI', 'Open Source'],
    github: 'https://github.com/amathyzin/aMathyBoost',
    moreInfo: '/projects/amathyboost',
  }

  return (
    <section id="featured-project" className="section-padding">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-dark/60 rounded-2xl p-8 border border-primary/20"
        >
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
            <div className={`relative w-full h-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={700}
                className="object-cover w-full h-full"
                loading="lazy"
                placeholder="blur"
                blurDataURL={featuredPlaceholder}
                onLoadingComplete={() => setImageLoaded(true)}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </div>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-dark/30">
                <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">Projeto em Destaque</h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">{project.title}</h3>
            <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href={project.moreInfo} className="btn-primary inline-flex items-center gap-2">
                <FaInfoCircle />
                Mais informações
              </Link>

              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <FaGithub />
                Código no GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


