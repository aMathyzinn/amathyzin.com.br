'use client'

import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Dynamically import heavy components
export const ParticleBackground = dynamic(
  () => import('@/components/effects/ParticleBackground'),
  {
    loading: () => <div className="fixed inset-0 bg-dark -z-10" />,
    ssr: false
  }
)

export const ThreeScene = dynamic(
  () => import('@/components/three/ThreeScene'),
  {
    loading: () => <div className="w-full h-96 bg-dark/50 rounded-lg" />,
    ssr: false
  }
)

export const DynamicProjectCard = dynamic(
  () => import('@/components/ui/ProjectCard'),
  {
    loading: () => <div className="w-full h-64 bg-dark/50 rounded-lg animate-pulse" />,
    ssr: true
  }
)