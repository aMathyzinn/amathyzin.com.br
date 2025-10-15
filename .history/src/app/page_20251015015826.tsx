'use client'

import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { FamousProjects } from '@/components/sections/FamousProjects'
import { About } from '@/components/sections/About'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { YouTubeChannel } from '@/components/sections/YouTubeChannel'
import { Community } from '@/components/sections/Community'
import { ProjectsInnovations } from '@/components/sections/ProjectsInnovations'

// Lazy-load the heavy carousel section client-side only
const RecentVideos = dynamic(() => import('@/components/sections/RecentVideos'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <FamousProjects />
      <About />
      <ProjectsInnovations />
      <FeaturedProject />
      <RecentVideos />
      <YouTubeChannel />
      <Community />
    </>
  )
}