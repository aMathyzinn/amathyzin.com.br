'use client'

import dynamic from 'next/dynamic'

// Client-only wrapper to load the heavy WebGL particle effect after hydration
const ParticleBackground = dynamic(
  () => import('@/components/effects/ParticleBackground'),
  { ssr: false }
)

export default function ParticleBackgroundClient() {
  return <ParticleBackground />
}