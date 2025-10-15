'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/ProjectCard'

const projects = [
  {
    id: 'robooster2',
    title: 'RoBooster 2',
    description: 'O RoBooster 2 é um otimizador desenvolvido para integrar ao BloxStrap e melhorar o desempenho no Roblox.',
    videoUrl: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/preview',
    projectUrl: '/downloads/robooster2',
    tags: ['Roblox', 'Otimização', 'Performance'],
  },
  {
    id: '3kpack',
    title: 'aMathyzin 3k Pack',
    description: 'Este pack é uma otimização especial para os 3.000 inscritos do aMathyzin, focado em melhorar o desempenho geral do PC para jogos.',
    videoUrl: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
    projectUrl: '/downloads/3kpack',
    tags: ['Windows', 'Gaming', 'FPS Boost'],
  },
  {
    id: 'batchclick',
    title: 'BatchClick Pack',
    description: 'O BatchClick é um pack de otimização avançada para Windows que melhora o desempenho do sistema com precisão e eficiência.',
    videoUrl: 'https://www.youtube.com/embed/iN5C3KDIGH8',
    projectUrl: '/downloads/batchclick',
    tags: ['Windows', 'Batch', 'Sistema'],
  },
]

export function FamousProjects() {
  return (
    <section id="downloads" className="section-padding bg-gradient-dark content-visibility-auto">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Projetos Famosos
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Conheça nossos projetos mais populares e baixados pela comunidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}