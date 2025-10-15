import React from 'react'
import Image from 'next/image'

type DeveloperBadgeProps = {
  name: string
  githubUrl: string
  avatarUrl?: string
  className?: string
}

export default function DeveloperBadge({ name, githubUrl, avatarUrl, className }: DeveloperBadgeProps) {
  const src = avatarUrl && avatarUrl.trim() !== '' ? avatarUrl : `${githubUrl}.png`

  return (
    <div className={`flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 ${className || ''}`}>
      {/* avatar usando <img> para evitar restrições de domínio do Next/Image */}
      <img
        src={src}
        alt={name}
        width={32}
        height={32}
        className="w-8 h-8 rounded-full object-cover border border-white/20"
      />
      <div className="flex flex-col">
        <span className="text-xs text-white/60">Desenvolvedor</span>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-primary">
          {name}
        </a>
      </div>
    </div>
  )
}