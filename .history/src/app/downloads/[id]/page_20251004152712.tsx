import products from '@/data/products'
import Link from 'next/link'

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
      <div className="min-h-screen pt-28">
        <div className="container-custom mx-auto text-center py-20">
          <h2 className="text-3xl font-bold">Produto não encontrado</h2>
          <p className="text-white/60 mt-2">Verifique o link ou volte para a página de downloads.</p>
          <Link href="/downloads" className="btn-primary mt-6">Voltar</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28">
      <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Video & Description */}
        <div>
          <div className="card-gradient p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-gradient mb-4">{product.title}</h1>
            <div className="aspect-video mb-4 rounded overflow-hidden bg-dark/50">
              {/* Normalize YouTube links to embed format if needed */}
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

            <p className="text-white/70">{product.description}</p>
          </div>

          <div className="card-gradient p-4 mt-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gradient mb-2">Sobre {product.title}</h3>
            <ul className="text-white/70 list-disc list-inside">
              <li>Arquivo: {product.fileName}</li>
              <li>Tamanho: {product.size}</li>
              <li>Categoria: {product.category}</li>
            </ul>
          </div>
        </div>

        {/* Right - Download box */}
        <div>
          <div className="card-gradient p-8 rounded-lg flex flex-col items-center">
            <img src={product.imageUrl || `/img/${product.id}.png`} alt={product.title} className="w-48 h-48 object-contain mb-6" />
            <h2 className="text-3xl font-bold text-gradient mb-2">⬇️ Download do {product.title}</h2>
            <p className="text-white/60 mb-4">{product.fileName} - {product.size}</p>

            <div className="w-full bg-dark/40 rounded-full overflow-hidden mb-4">
              <div className="h-3 bg-primary w-0" style={{ width: '0%' }} />
            </div>

            <label className="flex items-center gap-2 text-white/80 mb-4">
              <input type="checkbox" /> Eu aceito os Termos de Serviço
            </label>

            <a href={`/downloads/files/${product.fileName}`} className="btn-primary">Download</a>

            <p className="text-white/50 mt-6">Downloads: 0</p>
          </div>

          <div className="card-gradient p-6 mt-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gradient mb-3">Baixe as Dependências</h4>
            <div className="flex gap-4">
              <a className="btn-secondary">BloxStrap</a>
              <a className="btn-secondary">.NET</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


