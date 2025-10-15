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
                src="https://discord.com/api/guilds/1414439095341416450/widget.json"
                width="100%"
                height="500"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title="Discord comunidade aMathyzin"
                className="rounded-xl"
                style={{ minHeight: '500px' }}
                onLoad={(e) => {
                  // Verificar se o conteúdo carregou
                  setTimeout(() => {
                    try {
                      const iframe = e.target as HTMLIFrameElement;
                      const doc = iframe.contentDocument || iframe.contentWindow?.document;
                      if (doc && doc.body.innerHTML.includes('Unable to load')) {
                        console.warn('Discord widget failed to load - server may not have widget enabled');
                      }
                    } catch (err) {
                      console.log('Cannot access iframe content (normal for cross-origin)');
                    }
                  }, 2000);
                }}
              />
              
              {/* Fallback sempre visível por baixo */}
              <div className="absolute inset-0 flex items-center justify-center text-white/60 text-center p-8 rounded-xl -z-10">
                <div className="bg-dark/60 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <FaDiscord className="text-6xl mb-4 mx-auto text-primary/50" />
                  <p className="text-lg mb-2">Discord Widget</p>
                  <p className="text-sm text-white/40 mb-2">Carregando membros online...</p>
                  <p className="text-xs text-white/30">Se não carregar, verifique se o widget está habilitado no servidor</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}