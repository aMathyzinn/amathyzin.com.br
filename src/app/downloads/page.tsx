'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { FaSearch, FaFilter, FaDownload } from 'react-icons/fa'
import { useState } from 'react'

const allProjects = [
  {
    id: 'robooster2',
    title: 'RoBooster 2',
    description: 'Otimizador avançado para Roblox integrado ao BloxStrap. Melhore FPS e reduza lag.',
    videoUrl: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/preview',
    projectUrl: '/downloads/robooster2',
    tags: ['Roblox', 'Otimização', 'FPS'],
    category: 'games',
  },
  {
    id: '3kpack',
    title: 'aMathyzin 3k Pack',
    description: 'Pack completo de otimização para Windows. Especial 3000 inscritos.',
    videoUrl: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
    projectUrl: '/downloads/3kpack',
    tags: ['Windows', 'Gaming', 'Pack Completo'],
    category: 'system',
  },
  {
    id: 'batchclick',
    title: 'BatchClick Pack',
    description: 'Otimizações em batch com interface simples. Ideal para PCs fracos.',
    videoUrl: 'https://www.youtube.com/embed/iN5C3KDIGH8',
    projectUrl: '/downloads/batchclick',
    tags: ['Windows', 'Batch', 'Interface'],
    category: 'system',
  },
  {
    id: 'valorantbooster',
    title: 'Valorant Booster',
    description: 'Otimizador específico para Valorant. Reduza input lag e melhore a performance.',
    videoUrl: 'https://www.youtube.com/embed/7qV-fDkxeVc',
    projectUrl: '/downloads/valorantbooster',
    tags: ['Valorant', 'FPS', 'Gaming'],
    category: 'games',
  },
  {
    id: 'fpspack',
    title: 'FPS Pack Universal',
    description: 'Pack de otimização focado em aumentar FPS em qualquer jogo.',
    videoUrl: 'https://www.youtube.com/embed/E26PVIiKWbQ',
    projectUrl: '/downloads/fpspack',
    tags: ['FPS', 'Universal', 'Gaming'],
    category: 'games',
  },
  {
    id: 'haunted',
    title: 'Haunted Optimizer',
    description: 'Otimizador temático com interface dark. Performance e estilo.',
    videoUrl: 'https://www.youtube.com/embed/ceBDhpBqe08',
    projectUrl: '/downloads/haunted',
    tags: ['Windows', 'Dark Theme', 'Style'],
    category: 'system',
  },
]

const categories = [
  { id: 'all', label: 'Todos', icon: '🎯' },
  { id: 'system', label: 'Sistema', icon: '💻' },
  { id: 'games', label: 'Jogos', icon: '🎮' },
]

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <span className="text-gradient">Downloads</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Baixe as melhores otimizações e ferramentas para turbinar seu PC
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark/50 border border-white/10 rounded-lg 
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
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-dark/50 text-white/70 hover:bg-dark/70'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-white/60">
              {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2 text-primary">
              <FaDownload />
              <span className="font-semibold">+10K Downloads</span>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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