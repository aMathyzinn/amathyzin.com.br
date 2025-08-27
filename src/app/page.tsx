'use client'

import { Hero } from '@/components/sections/Hero'
import { FamousProjects } from '@/components/sections/FamousProjects'
import { About } from '@/components/sections/About'
import { ProjectsInnovations } from '@/components/sections/ProjectsInnovations'
import { RecentVideos } from '@/components/sections/RecentVideos'
import { YouTubeChannel } from '@/components/sections/YouTubeChannel'
import { Community } from '@/components/sections/Community'

export default function Home() {
  return (
    <>
      <Hero />
      <FamousProjects />
      <About />
      <ProjectsInnovations />
      <RecentVideos />
      <YouTubeChannel />
      <Community />
    </>
  )
}