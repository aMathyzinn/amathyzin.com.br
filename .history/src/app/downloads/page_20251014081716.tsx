'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/ProjectCard'
import products from '@/data/products'
import { FaSearch, FaFilter, FaDownload, FaSortAlphaDown, FaSortAmountDownAlt } from 'react-icons/fa'
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
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-gradient-radial from-primary/15 via-transparent to-transparent w-[60vw] h-[60vw] rounded-full blur-3xl opacity-40 absolute -top-40 left-1/2 -translate-x-1/2" />
        </div>
        <div className="container-custom mx-auto text-center relative">
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
          <p className="text-white/50 mt-2 text-sm">Curadoria de projetos confiáveis, com foco em performance.</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
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
            <p className="text-white/60">
              {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2 text-primary">
              <FaDownload />
              <span className="font-semibold">+10K Downloads</span>
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