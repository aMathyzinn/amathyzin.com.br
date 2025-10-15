'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaPlay, FaDownload, FaTag, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  videoUrl: string
  projectUrl: string
  tags?: string[]
  category?: string
  size?: string
  imageUrl?: string
  downloads?: number
}

export function ProjectCard({ title, description, videoUrl, projectUrl, tags = [], category, size, imageUrl, downloads }: ProjectCardProps) {
  const placeholderSvg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f0f15"/>
          <stop offset="100%" stop-color="#1a1a24"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <text x="50%" y="50%" fill="#bbb" font-family="sans-serif" font-size="20" text-anchor="middle" dominant-baseline="middle">Prévia indisponível</text>
    </svg>`
  )

  // Deriva thumbnail do YouTube se não houver imagem específica
  const deriveYouTubeThumb = (url: string) => {
    if (!url) return placeholderSvg
    if (!url.includes('youtube')) return placeholderSvg
    const id = url.includes('/embed/')
      ? url.split('/embed/')[1].split('?')[0]
      : url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
  }

  const coverSrc = (videoUrl && videoUrl.includes('youtube'))
    ? deriveYouTubeThumb(videoUrl)
    : (imageUrl && imageUrl.trim() !== '' ? imageUrl : placeholderSvg)
  const prettyDownloads = typeof downloads === 'number' ? `${downloads.toLocaleString('pt-BR')} downloads` : 'Verificado & Seguro'
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card-gradient group h-full flex flex-col border border-white/10 hover:border-primary/40 transition-colors rounded-2xl overflow-hidden shadow-md hover:shadow-primary/20"
    >
      {/* Video Preview */}
      <div className="relative aspect-video mb-4 overflow-hidden bg-dark/50">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full block relative">
          <Image
            src={coverSrc}
            alt={`${title} cover`}
            className="w-full h-full object-cover"
            width={480}
            height={360}
            placeholder="blur"
            blurDataURL={placeholderSvg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <FaPlay className="text-white/80 text-4xl" />
          </motion.div>
          {/* Badge de categoria no canto */}
          {category && (
            <span className="absolute left-3 top-3 px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm">
              {category}
            </span>
          )}
        </a>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-4 pb-4">
        <h3 className="text-2xl font-bold mb-2 text-gradient">
          {title}
        </h3>
        
        <p className="text-white/70 mb-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs rounded-full"
              >
                <FaTag size={10} />
                {tag}
              </span>
            ))}
            {size && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs rounded-full">
                {size}
              </span>
            )}
          </div>
        )}

        {/* Footer (CTA + confiança) */}
        <div className="flex items-center justify-between mt-2">
          <Link 
            href={projectUrl}
            className="inline-flex items-center gap-2 text-primary font-semibold tracking-wide hover:text-secondary transition-colors group"
          >
            <span>Ver projeto</span>
            <FaDownload className="text-sm translate-x-0 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <FaShieldAlt className="text-green-400" />
            <FaCheckCircle className="text-green-400" />
            <span className="hidden sm:inline whitespace-nowrap">{prettyDownloads}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}