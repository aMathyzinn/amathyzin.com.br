'use client'

import { useState, useRef } from 'react'
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
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

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

        {/* Autoplay Toggle - moderno */}
        <div className="flex justify-end mb-6">
          <ToggleSwitch
            id="recent-videos-autoplay"
            checked={autoplay}
            onChange={(checked) => setAutoplay(checked)}
            label="Rolagem Automática"
            className="bg-dark/50 px-4 py-2 rounded-full"
            attentionWhenUnchecked
          />
        </div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Custom Navigation Arrows */}
          <motion.button
            ref={prevRef}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Anterior"
            className="group absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary/30 hover:border-primary transition-colors shadow-md backdrop-blur-sm"
          >
            <PiCaretLeftBold className="text-2xl drop-shadow" />
          </motion.button>
          <motion.button
            ref={nextRef}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Próximo"
            className="group absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-secondary/30 hover:border-secondary transition-colors shadow-md backdrop-blur-sm"
          >
            <PiCaretRightBold className="text-2xl drop-shadow" />
          </motion.button>

          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            centeredSlides
            autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
            navigation={{ prevEl: prevRef.current as any, nextEl: nextRef.current as any }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error - prev/next refs são definidos após render
              swiper.params.navigation.prevEl = prevRef.current
              // @ts-expect-error - prev/next refs são definidos após render
              swiper.params.navigation.nextEl = nextRef.current
            }}
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
        </div>
      </div>
    </section>
  )
}