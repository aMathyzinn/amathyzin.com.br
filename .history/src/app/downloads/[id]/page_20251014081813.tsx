import products from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import { FaDownload, FaArrowLeft, FaCheckCircle, FaExternalLinkAlt, FaGithub, FaYoutube, FaShieldAlt, FaUsers, FaStar } from 'react-icons/fa'

type Params = {
  params: { id: string }
}

export async function generateStaticParams() {
  return products.map(p => ({ id: p.id }))
}

export default function ProductPage({ params }: Params) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-dark">
        <div className="container-custom mx-auto text-center py-20">
          <div className="card-gradient p-12 rounded-2xl max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4">Produto não encontrado</h2>
            <p className="text-white/60 mb-6">Verifique o link ou volte para a página de downloads.</p>
            <Link href="/downloads" className="btn-primary inline-flex items-center gap-2">
              <FaArrowLeft />
              Voltar aos Downloads
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/12 via-transparent to-transparent" />
        <div className="container-custom mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <Link href="/downloads" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-4">
              <FaArrowLeft />
              Voltar aos Downloads
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-2">{product.title}</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">{product.description}</p>
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {product.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container-custom mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content - Video & Info */}
          <div className="xl:col-span-2 space-y-6">
            {/* Video Section */}
            <div className="card-gradient p-6 rounded-2xl">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-dark/50 border border-primary/20">
                <iframe
                  src={product.videoUrl.includes('watch') || product.videoUrl.includes('youtu.be')
                    ? product.videoUrl.includes('watch')
                      ? `https://www.youtube.com/embed/${new URL(product.videoUrl).searchParams.get('v')}`
                      : `https://www.youtube.com/embed/${product.videoUrl.split('youtu.be/')[1].split('?')[0]}`
                    : product.videoUrl
                  }
                  title={product.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <FaYoutube />
                  <span className="font-semibold">Tutorial Completo</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <FaUsers />
                  <span className="text-sm">+10K Visualizações</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <FaStar />
                  <span className="text-sm">Projeto Premium</span>
                </div>
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="card-gradient p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                Recursos e Benefícios
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Performance Otimizada</h4>
                      <p className="text-white/60 text-sm">Melhora significativa no desempenho do sistema</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Fácil Instalação</h4>
                      <p className="text-white/60 text-sm">Processo de instalação simples e intuitivo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Suporte Completo</h4>
                      <p className="text-white/60 text-sm">Documentação e suporte da comunidade</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Código Aberto</h4>
                      <p className="text-white/60 text-sm">Disponível no GitHub para transparência</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Atualizações Regulares</h4>
                      <p className="text-white/60 text-sm">Melhorias constantes e correções</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Compatibilidade</h4>
                      <p className="text-white/60 text-sm">Funciona em todas as versões do Windows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="card-gradient p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-6">Detalhes Técnicos</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-dark/30 p-4 rounded-xl border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Arquivo</h4>
                  <p className="text-white/80">{product.fileName}</p>
                </div>
                <div className="bg-dark/30 p-4 rounded-xl border border-secondary/10">
                  <h4 className="font-semibold text-secondary mb-2">Tamanho</h4>
                  <p className="text-white/80">{product.size}</p>
                </div>
                <div className="bg-dark/30 p-4 rounded-xl border border-accent/10">
                  <h4 className="font-semibold text-accent mb-2">Categoria</h4>
                  <p className="text-white/80">{product.category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Download & Info */}
          <div className="space-y-6">
            {/* Download Card */}
            <div className="card-gradient p-8 rounded-2xl text-center sticky top-24 border border-white/10">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-20" />
                <Image 
                  src={product.imageUrl || `/img/${product.id}.png`} 
                  alt={product.title} 
                  className="relative w-32 h-32 object-contain mx-auto rounded-xl" 
                  width={128}
                  height={128}
                />
              </div>
              
              <h2 className="text-2xl font-bold text-gradient mb-2">
                Download {product.title}
              </h2>
              <p className="text-white/60 mb-6">{product.fileName} • {product.size}</p>

              {/* Download Progress Simulation */}
              <div className="w-full bg-dark/40 rounded-full overflow-hidden mb-6">
                <div className="h-3 bg-gradient-to-r from-primary to-secondary w-full transition-all duration-1000" />
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-center gap-3 text-white/80 mb-6 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary bg-dark border-primary/30 rounded focus:ring-primary" />
                <span className="text-sm">Aceito os Termos de Serviço</span>
              </label>

              {/* Download Button */}
              <a 
                href={`/downloads/files/${product.fileName}`} 
                className="btn-primary w-full justify-center shine-effect group mb-4"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Gratuito
              </a>

              {/* Stats */}
              <div className="flex justify-between text-sm text-white/50 border-t border-white/10 pt-4">
                <span>Downloads: 2.5K+</span>
                <span>Avaliação: ⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            {/* Security Info */}
            <div className="card-gradient p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gradient mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-primary" />
                Segurança Garantida
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <FaCheckCircle />
                  <span>Verificado por antivírus</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <FaCheckCircle />
                  <span>Código fonte disponível</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <FaCheckCircle />
                  <span>Sem malware ou vírus</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <FaCheckCircle />
                  <span>Desenvolvido pela aMathyzin</span>
                </div>
              </div>
            </div>

            {/* Dependencies */}
            <div className="card-gradient p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gradient mb-4">Dependências</h4>
              <div className="space-y-3">
                <a href="#" className="btn-secondary w-full justify-center group">
                  <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                  BloxStrap
                </a>
                <a href="#" className="btn-secondary w-full justify-center group">
                  <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                  .NET Framework
                </a>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="card-gradient p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gradient mb-4 flex items-center gap-2">
                <FaGithub />
                Código Fonte
              </h4>
              <p className="text-white/60 text-sm mb-4">
                Confira o código fonte no GitHub e contribua com o projeto.
              </p>
              <a href="#" className="btn-primary w-full justify-center group">
                <FaGithub className="group-hover:rotate-12 transition-transform" />
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


