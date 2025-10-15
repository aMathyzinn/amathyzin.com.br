'use client'

import { Hero } from '@/components/sections/Hero'
import { FamousProjects } from '@/components/sections/FamousProjects'
import { About } from '@/components/sections/About'
import { RecentVideos } from '@/components/sections/RecentVideos'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { YouTubeChannel } from '@/components/sections/YouTubeChannel'
import { Community } from '@/components/sections/Community'
import { ProjectsInnovations } from '@/components/sections/ProjectsInnovations'

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