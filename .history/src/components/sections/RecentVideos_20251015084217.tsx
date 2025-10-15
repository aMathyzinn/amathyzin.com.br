'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import { FaYoutube, FaPlay } from 'react-icons/fa'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import Link from 'next/link'
import Image from 'next/image'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

const videos = [
  {
    id: 'ylDMxtM9zTs',
    title: 'Otimização pro Roblox - RoBooster',
    description: 'Uma otimização exclusiva em integração com o BloxStrap!',
  },
  {
    id: 'RzapmonmPp4',
    title: 'aMathyBoost',
    description: 'Otimizador de PC avançado desenvolvido por Memphis. Feito para todos os tipos de PC.',
  },
  {
    id: 'ciHfcpppItg',
    title: 'Terminal Optimizer 1.0',
    description: 'Otimize seu PC com esta poderosa ferramenta. Desenvolvida por Seven.',
  },
  {
    id: 'iN5C3KDIGH8',
    title: 'BatchClick Pack',
    description: 'Um pack diferenciado com botões em arquivos batch. Feito para computadores médios e fracos.',
  },
  {
    id: 'E26PVIiKWbQ',
    title: 'Terminal Optimizer 1.0',
    description: 'Vídeo ensinando a otimizar o PC com a ferramenta exclusiva Terminal Optimizer.',
  },
  {
    id: '7qV-fDkxeVc',
    title: 'Correção de Erros do Valorant',
    description: 'Tutorial dinâmico para corrigir problemas e erros do Valorant.',
  },
  {
    id: 'Pxcaxgx_j-0',
    title: 'aMathyzin 3k Pack',
    description: 'O pack mais completo do canal, feito quando atingimos 3.000 inscritos.',
  },
  {
    id: 'ceBDhpBqe08',
    title: 'Como funcionam as otimizações',
    description: 'Vídeo explicativo sobre o funcionamento das otimizações de PC.',
  },
  {
    id: 'YG5O3CB3nWk',
    title: 'Otimizar o PC em 1 Minuto',
    description: 'Aprenda a otimizar seu PC com apenas um comando em 1 minuto.',
  },
]

export function RecentVideos() {
  const [autoplay, setAutoplay] = useState(true)

  return (
    <section id="videos" className="section-padding bg-darker/50 content-visibility-auto">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Vídeos Recentes
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Confira nossos tutoriais e demonstrações mais recentes no YouTube
          </p>
        </motion.div>

        {/* Autoplay Toggle (modern) */}
        <div className="flex justify-end mb-6">
          <ToggleSwitch
            id="recent-autoplay"
            checked={autoplay}
            onChange={setAutoplay}
            label="Rolagem Automática"
            attentionWhenUnchecked
            className="bg-dark/30 p-2 rounded-xl"
          />
        </div>

        {/* Video Carousel */}
        <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ prevEl: '.recent-prev', nextEl: '.recent-next' }}
          loop
          centeredSlides
          autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-gradient group"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-dark/50">
                  {/* Replace heavy iframe with clickable thumbnail to open YouTube */}
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full block relative"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      width={480}
                      height={360}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <FaPlay className="text-white/80 text-4xl" />
                    </div>
                  </a>
                </div>

                {/* Video Info */}
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-white/60 text-sm mb-4">{video.description}</p>
                
                <Link
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center shine-effect"
                >
                  <FaYoutube />
                  Assistir
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Arrows (Phosphor Icons) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          aria-label="Anterior"
          className="recent-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-primary hover:bg-white/20 hover:border-primary/40 backdrop-blur-sm"
        >
          <PiCaretLeftBold className="text-2xl" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          aria-label="Próximo"
          className="recent-next absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-primary hover:bg-white/20 hover:border-primary/40 backdrop-blur-sm"
        >
          <PiCaretRightBold className="text-2xl" />
        </motion.button>
        </div>
      </div>
    </section>
  )
}