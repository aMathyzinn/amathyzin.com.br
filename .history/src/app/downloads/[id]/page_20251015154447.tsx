import type { Metadata } from 'next'
import products from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import { FaDownload, FaArrowLeft, FaCheckCircle, FaExternalLinkAlt, FaGithub, FaYoutube, FaShieldAlt, FaUsers, FaStar } from 'react-icons/fa'
import TermsDownload from '@/components/downloads/TermsDownload'
import DeveloperBadge from '@/components/ui/DeveloperBadge'

type Params = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map(p => ({ id: p.id }))
}

export default async function ProductPage({ params }: Params) {
  const { id } = await params
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-dark">
        <div className="container-custom mx-auto text-center py-20">
          <div className="card-gradient p-12 rounded-2xl max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4">Produto não encontrado</h2>
            <p className="text-white/60 mb-6">Verifique o link ou volte para a página de downloads.</p>
            <Link href="/downloads/" className="btn-primary inline-flex items-center gap-2">
              <FaArrowLeft />
              Voltar aos Downloads
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const ytId = getYouTubeId(product.videoUrl)
  const videoThumb = ytId ? `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg` : undefined
  const ogImage = videoThumb || product.imageUrl || '/imgs/logo.webp'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    description: product.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Windows',
    url: `https://amathyzin.com.br${product.projectUrl}/`,
    image: ogImage,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
    publisher: {
      '@type': 'Organization',
      name: 'aMathyzin',
      url: 'https://amathyzin.com.br/',
    },
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/DownloadAction',
      userInteractionCount: product.downloads || 0,
    },
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Breadcrumb */}
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center gap-2 text-white/50 text-sm py-4">
          <Link href="/" className="hover:text-white">Início</Link>
          <span>›</span>
          <Link href="/downloads/" className="hover:text-white">Downloads</Link>
          <span>›</span>
          <span className="text-white/80">{product.title}</span>
        </div>
      </div>

      {/* Header Card */}
      <div className="container-custom mx-auto px-4">
        <div className="card-gradient rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="flex items-center gap-2 text-rose-300 mb-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Download Premium</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-3">{product.title}</h1>
          <p className="text-white/70 max-w-3xl">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {(product.tags || []).map(tag => (
              <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container-custom mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Tutorial Card + Sobre */}
          <div className="space-y-6 lg:col-span-2">
            {/* Tutorial Completo */}
            <div className="card-gradient rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-semibold">Tutorial Completo</span>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-dark/50 border border-white/10 mb-4">
                <iframe
                  src={product.videoUrl.includes('/embed/') 
                    ? product.videoUrl
                    : product.videoUrl.includes('watch') || product.videoUrl.includes('youtu.be')
                      ? product.videoUrl.includes('watch')
                        ? `https://www.youtube.com/embed/${new URL(product.videoUrl).searchParams.get('v')}`
                        : `https://www.youtube.com/embed/${product.videoUrl.split('youtu.be/')[1].split('?')[0]}`
                      : product.videoUrl}
                  title={product.title}
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={product.videoUrl.includes('/embed/') 
                  ? product.videoUrl.replace('/embed/', '/watch?v=')
                  : product.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaYoutube /> Assistir no YouTube
                </a>
                <button className="btn-secondary">
                  <FaStar /> Salvar para Depois
                </button>
              </div>
            </div>

            {/* Sobre o Projeto */}
            <div className="card-gradient rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="font-semibold">Sobre o {product.title}</span>
              </div>
              <p className="text-white/70 mb-6">
                {product.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-white">Interface intuitiva e fácil de usar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-secondary" />
                    <div>
                      <p className="text-white">Otimizações gráficas e de desempenho</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent" />
                    <div>
                      <p className="text-white">Compatível com Windows 10 e 11</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-white">Integração com ferramentas populares</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-secondary" />
                    <div>
                      <p className="text-white">Suporte técnico via comunidade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent" />
                    <div>
                      <p className="text-white">Instalação segura e verificada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aviso Importante */}
              <div className="mt-6 rounded-xl bg-dark/40 border border-white/10 p-4">
                <p className="text-white/70 text-sm">
                  Este software é gratuito e não deve ser vendido. Uso apenas para fins pessoais e educacionais.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bloco Único Vertical (Download + Segurança + Dependências + GitHub) */}
          <div>
            <div className="card-gradient rounded-2xl p-6 sticky top-24 border border-white/10 space-y-6">
              {/* Download Header */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-20" />
                  {(() => {
                    const fallbackLogo = 'https://amathyzin.com.br/imgs/logo.png'
                    const logoSrc = product.imageUrl && product.imageUrl.trim() !== '' && !product.imageUrl.includes('amathyzin.com')
                      ? product.imageUrl
                      : fallbackLogo
                    return (
                      <Image
                        src={logoSrc}
                        alt={product.title}
                        className="relative w-20 h-20 object-contain rounded-xl"
                        width={80}
                        height={80}
                      />
                    )
                  })()}
                </div>
                <div>
                  <h2 className="text-xl font-bold">Download {product.title}</h2>
                  <p className="text-white/60 text-sm">{product.fileName} • {product.size}</p>
                </div>
              </div>

              {/* Desenvolvedor */}
              <DeveloperBadge
                name={product.developerName || 'aMathyzinn'}
                githubUrl={product.developerGithub || 'https://github.com/aMathyzinn'}
                avatarUrl={product.developerAvatar}
              />

              {/* Progress bar removida conforme solicitado */}

              {/* Terms + Download */}
              <TermsDownload fileName={product.fileName} />

              {/* Segurança */}
              <div className="space-y-3 border-t border-white/10 pt-4">
                <h4 className="text-lg font-semibold flex items-center gap-2"><FaShieldAlt /> Segurança</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-green-400"><FaCheckCircle /> 100% Seguro</div>
                  <div className="flex items-center gap-2 text-green-400"><FaCheckCircle /> Scan antivírus concluído</div>
                  <div className="flex items-center gap-2 text-green-400"><FaCheckCircle /> Sem malware</div>
                </div>
              </div>

              {/* Dependências */}
              {product.id === 'robooster2' && (
                <div className="space-y-3 border-t border-white/10 pt-4">
                  <h4 className="text-lg font-semibold">Dependências</h4>
                  <div className="space-y-2">
                    <a href="https://bloxstraplabs.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center group"><FaExternalLinkAlt /> BloxStrap</a>
                    <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center group"><FaExternalLinkAlt /> .NET Framework</a>
                  </div>
                </div>
              )}

              {/* GitHub */}
              <div className="space-y-3 border-t border-white/10 pt-4">
                <h4 className="text-lg font-semibold flex items-center gap-2"><FaGithub /> Código Fonte</h4>
                <p className="text-white/60 text-sm">Veja o código no GitHub e contribua com melhorias.</p>
                <a href={product.developerGithub || 'https://github.com/aMathyzinn'} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center group"><FaGithub /> Ver perfil no GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="container-custom mx-auto px-4 pb-12">
        <div className="card-gradient rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold">Precisa de Ajuda?</h3>
          <p className="text-white/70 mb-4">Nossa comunidade está pronta para ajudar com dúvidas e suporte.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.youtube.com/@aMathyzin" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaYoutube /> Canal do YouTube</a>
            <a href="https://discord.gg/XBajMu5dcr" target="_blank" rel="noopener noreferrer" className="btn-secondary">Suporte no Discord</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function getYouTubeId(url?: string) {
  if (!url) return null
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname.startsWith('/embed/')) {
        return u.pathname.split('/').pop() || null
      }
      if (u.pathname === '/watch') {
        return u.searchParams.get('v')
      }
    }
    return null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id
  const product = products.find(p => p.id === id)

  if (!product) {
    const url = `https://amathyzin.com.br/downloads/${id}/`
    return {
      title: 'Produto não encontrado – Downloads | aMathyzin',
      description: 'Este projeto não foi encontrado. Volte para a página de downloads para explorar outras ferramentas.',
      alternates: { canonical: `/downloads/${id}/` },
      robots: { index: false, follow: false },
      openGraph: {
        title: 'Produto não encontrado – aMathyzin',
        description: 'Projeto inexistente ou removido.',
        url,
        type: 'website',
        images: [{ url: '/imgs/logo.webp', width: 1200, height: 630, alt: 'aMathyzin' }],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Produto não encontrado – aMathyzin',
        description: 'Projeto inexistente ou removido.',
        images: ['/imgs/logo.webp'],
      },
    }
  }

  const ytId = getYouTubeId(product.videoUrl)
  const videoThumb = ytId ? `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg` : undefined
  const ogImage = product.imageUrl || videoThumb || '/imgs/logo.webp'
  const url = `https://amathyzin.com.br${product.projectUrl}/`
  const title = `${product.title} – Download | aMathyzin`
  const desc = product.description || 'Baixe ferramentas e otimizações gratuitas do aMathyzin.'
  const keywords = [...(product.tags || []), 'download', 'otimização', 'grátis'].join(', ')

  return {
    title,
    description: desc,
    keywords,
    alternates: { canonical: `${product.projectUrl}/` },
    openGraph: {
      title,
      description: desc,
      url,
      type: 'product',
    images: [{ url: ogImage, width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImage],
      creator: '@amathyzin',
    },
    robots: { index: true, follow: true },
  }
}