'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaDiscord, FaUsers, FaGift, FaComments } from 'react-icons/fa'

const communityFeatures = [
  {
    icon: FaUsers,
    title: 'Comunidade Ativa',
    description: 'Mais de 1000 membros ativos',
  },
  {
    icon: FaGift,
    title: 'Sorteios Exclusivos',
    description: 'Prêmios mensais para membros',
  },
  {
    icon: FaComments,
    title: 'Suporte 24/7',
    description: 'Ajuda sempre que precisar',
  },
]

export function Community() {
  return (
    <section id="community" className="section-padding bg-darker/50 content-visibility-auto">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Community Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Junte-se à nossa Comunidade!
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Faça parte do servidor oficial do aMathyzin no Discord, onde você terá acesso a 
              suporte exclusivo, sorteios, dicas e interações com outros entusiastas de 
              tecnologia e otimização. Não perca as novidades e fique por dentro de todos 
              os nossos projetos.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="text-3xl text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/discord"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex shine-effect"
            >
              <FaDiscord />
              Entrar no Discord
            </Link>
            
            <p className="mt-4 text-white/40 text-sm">
              (Ou acesse pelo widget ao lado)
            </p>
          </motion.div>

          {/* Discord Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20" />
            <div className="relative bg-dark/50 backdrop-blur-sm rounded-2xl p-1 border border-primary/20">
              <iframe
                src="https://discord.com/widget?id=1210446694953779260&theme=dark"
                width="100%"
                height="500"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                loading="lazy"
                title="Discord comunidade aMathyzin"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}