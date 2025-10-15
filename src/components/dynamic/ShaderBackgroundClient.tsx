'use client'

import dynamic from 'next/dynamic'

const ShaderBackground = dynamic(
  () => import('@/components/effects/ShaderBackground').then(m => m.ShaderBackground),
  { ssr: false }
)

export default function ShaderBackgroundClient() {
  return <ShaderBackground />
}