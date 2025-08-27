'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import Link from 'next/link'
import { FaGithub, FaMagic, FaBolt, FaTools } from 'react-icons/fa'
import { useState } from 'react'

function RotatingCube() {
  const [hovered, setHovered] = useState(false)
  
  return (
    <Box
      args={[1, 1, 1]}
      scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color={hovered ? '#4ecdc4' : '#ff6b6b'} 
        emissive={hovered ? '#4ecdc4' : '#ff6b6b'}
        emissiveIntensity={0.2}
      />
    </Box>
  )
}

const innovations = [
  {
    icon: FaMagic,
    title: 'Interface Futurista',
    description: 'Desenvolvemos interfaces com design avançado que combinam interatividade e estética moderna.',
    modalTitle: 'Interface Futurista',
    modalText: 'Descubra como nossas interfaces futuristas unem design inovador e tecnologia de ponta para criar experiências visuais imersivas e interativas. Cada detalhe é cuidadosamente projetado para otimizar a interação do usuário e garantir um visual único.',
  },
  {
    icon: FaBolt,
    title: 'Otimização Inteligente',
    description: 'Soluções que monitoram e otimizam recursos do PC em tempo real, garantindo performance máxima.',
    modalTitle: 'Otimização Inteligente',
    modalText: 'Nossa solução de Otimização Inteligente monitora e ajusta dinamicamente os recursos do seu PC, proporcionando desempenho máximo sem comprometer a segurança. Ideal para usuários que buscam eficiência e praticidade.',
  },
  {
    icon: FaTools,
    title: 'Ferramentas Exclusivas',
    description: 'Ferramentas desenvolvidas para melhorar a experiência do usuário e a eficiência do sistema.',
    modalTitle: 'Ferramentas Exclusivas',
    modalText: 'Explore nossas Ferramentas Exclusivas, desenvolvidas para oferecer soluções personalizadas que elevam a experiência de uso do seu sistema. Cada ferramenta é testada e refinada para garantir resultados de alta performance.',
  },
]

export function ProjectsInnovations() {
  const [selectedModal, setSelectedModal] = useState<typeof innovations[0] | null>(null)

  return (
    <section id="projects" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Projetos e Inovações
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore nossas inovações e veja como unimos tecnologia e criatividade para desenvolver soluções únicas.
          </p>
        </motion.div>

        {/* 3D Cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-64 h-64 mx-auto mb-12"
        >
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
          </Canvas>
        </motion.div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-gradient text-center group cursor-pointer"
              onClick={() => setSelectedModal(innovation)}
            >
              <innovation.icon className="text-5xl text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-white/70 mb-4">{innovation.description}</p>
              <button className="text-primary hover:text-secondary transition-colors">
                Saiba Mais →
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link 
            href="https://github.com/amathyzin" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shine-effect"
          >
            <FaGithub />
            Acesse o GitHub
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedModal(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark border border-primary/20 rounded-2xl p-8 max-w-lg w-full shadow-neon-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedModal(null)}
              className="float-right text-white/60 hover:text-white text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-primary mb-4">
              {selectedModal.modalTitle}
            </h2>
            <p className="text-white/80 leading-relaxed">
              {selectedModal.modalText}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}