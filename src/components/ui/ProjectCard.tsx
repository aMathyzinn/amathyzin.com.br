'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPlay, FaDownload, FaTag } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  videoUrl: string
  projectUrl: string
  tags?: string[]
}

export function ProjectCard({ title, description, videoUrl, projectUrl, tags = [] }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-gradient group h-full flex flex-col"
    >
      {/* Video Preview */}
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-dark/50">
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="autoplay"
          loading="lazy"
          title={`${title} preview`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <FaPlay className="text-white/80 text-4xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-3 text-gradient uppercase">
          {title}
        </h3>
        
        <p className="text-white/70 mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
              >
                <FaTag size={10} />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <Link 
          href={projectUrl}
          className="btn-primary w-full justify-center shine-effect group"
        >
          <FaDownload className="group-hover:animate-bounce" />
          Ver Projeto
        </Link>
      </div>
    </motion.div>
  )
}