'use client'

import type { Metadata } from 'next'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectCard } from '@/components/ui/ProjectCard'
import products from '@/data/products'
import { 
  FaSearch,
  FaFilter,
  FaDownload,
  FaSortAlphaDown,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaCheckCircle
} from 'react-icons/fa'
import { useState } from 'react'

const allProjects = products

const categories = [
  { id: 'all', label: 'Todos', icon: '🎯' },
  { id: 'system', label: 'Sistema', icon: '💻' },
  { id: 'games', label: 'Jogos', icon: '🎮' },
]

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'category'>('default')

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Ordenação
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'name') return a.title.localeCompare(b.title)
    if (sortBy === 'category') return (a.category || '').localeCompare(b.category || '')
    return 0
  })

  return (
    <div className="min-h-screen pt-20 bg-gradient-dark">
      {/* Hero Section refinado */}
      <section className="section-padding relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-gradient-radial from-primary/20 via-transparent to-transparent w-[70vw] h-[70vw] rounded-full blur-3xl opacity-40 absolute -top-48 left-1/2 -translate-x-1/2" />
        </div>
        <div className="container-custom mx-auto text-center relative">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
              <Image src="/imgs/head.webp" alt="Head" width={40} height={40} className="w-10 h-10" />
              Centro de Downloads
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-3"
          >
            <span className="text-gradient">Downloads</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
          >
            Descubra nossa coleção premium de ferramentas e otimizações desenvolvidas para maximizar o desempenho do seu sistema e elevar sua experiência digital.
          </motion.p>

          {/* Badges de segurança */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {[
              { icon: FaCheckCircle, label: '100% Seguro', color: 'text-green-400' },
              { icon: FaShieldAlt, label: 'Sem Malware', color: 'text-green-400' },
              { icon: FaCheckCircle, label: 'Verificado', color: 'text-green-400' },
            ].map(({ icon: Icon, label, color }) => (
              <span key={label} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                <Icon className={color} />
                {label}
              </span>
            ))}
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8 max-w-4xl mx-auto">
            {[
              { value: '300K+', label: 'Downloads Totais', icon: FaDownload },
              { value: '250K+', label: 'Usuários Únicos', icon: FaUsers },
              { value: '4.9', label: 'Avaliação Média', icon: FaStar },
              { value: '98%', label: 'Taxa de Sucesso', icon: FaCheckCircle },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="card-gradient rounded-xl p-4 border border-white/10 text-left">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10">
                    <Icon className="text-primary" />
                  </span>
                  <div>
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-xs text-white/60">{label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Cabeçalho de filtros */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Encontre a <span className="text-gradient">Ferramenta Perfeita</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-2 text-sm">
              Use nossas filtros avançadas para descobrir exatamente o que você precisa.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-4 mb-8 items-stretch">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark/50 border border-white/10 rounded-xl 
                           text-white placeholder-white/40 focus:outline-none focus:border-primary 
                           transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all border ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white border-primary/50 shadow-lg shadow-primary/20'
                      : 'bg-dark/50 text-white/70 hover:bg-dark/70 border-white/10'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 ml-auto">
              <label className="text-white/60 text-sm hidden md:block">Ordenar por</label>
              <div className="relative">
                <FaSortAlphaDown className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'default' | 'name' | 'category')}
                  className="pl-10 pr-10 py-3 bg-dark/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
                >
                  <option value="default">Relevância</option>
                  <option value="name">Nome (A–Z)</option>
                  <option value="category">Categoria</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-white/80 font-medium">
                {filteredProjects.length} Ferramenta{filteredProjects.length !== 1 ? 's' : ''}
              </p>
              <p className="text-xs text-white/50">Resultados encontrados</p>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <FaDownload />
              <span className="font-semibold">+300K Downloads</span>
            </div>
          </div>

          {/* Projects Grid */}
          {sortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaFilter className="text-6xl text-white/20 mx-auto mb-4" />
              <p className="text-xl text-white/60">Nenhum projeto encontrado</p>
              <p className="text-white/40 mt-2">Tente ajustar os filtros ou termos de busca</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
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