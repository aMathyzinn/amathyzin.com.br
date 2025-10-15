'use client'

import { useState } from 'react'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'
import { FaDownload } from 'react-icons/fa'

interface TermsDownloadProps {
  fileName: string
}

export default function TermsDownload({ fileName }: TermsDownloadProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  const disabled = !acceptedTerms || isDownloading

  const startDownload = async () => {
    if (disabled) return

    try {
      setIsDownloading(true)
      setProgress(0)

      const url = `/download_files/${encodeURIComponent(fileName)}`
      const response = await fetch(url)
      if (!response.ok || !response.body) {
        throw new Error('Falha ao iniciar download')
      }

      const contentLength = Number(response.headers.get('content-length') || 0)
      const reader = response.body.getReader()
      const chunks: Uint8Array[] = []
      let received = 0

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        if (value) {
          chunks.push(value)
          received += value.length
          if (contentLength > 0) {
            setProgress(Math.min(100, Math.round((received / contentLength) * 100)))
          } else {
            // Sem tamanho conhecido, aproximação
            setProgress((prev) => Math.min(99, prev + 1))
          }
        }
      }

      const blob = new Blob(chunks)
      const objectUrl = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = objectUrl
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(objectUrl)

      setProgress(100)
    } catch (err) {
      console.error(err)
    } finally {
      setTimeout(() => {
        setIsDownloading(false)
      }, 400)
    }
  }

  return (
    <div className="space-y-3">
      <ToggleSwitch
        label="Concordo com os Termos de Serviço"
        checked={acceptedTerms}
        onChange={setAcceptedTerms}
        className="text-white/80"
        attentionWhenUnchecked
      />

      <button
        type="button"
        onClick={startDownload}
        aria-disabled={disabled}
        disabled={disabled}
        className={`btn-primary w-full justify-center shine-effect group ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <FaDownload className="group-hover:animate-bounce" /> {isDownloading ? 'Baixando...' : 'Baixar Agora'}
      </button>

      {/* Barra de progresso in-site */}
      <div className="space-y-2">
        <div className="rounded-full bg-dark/40 overflow-hidden h-2">
          <div
            className="h-2 bg-gradient-to-r from-primary to-secondary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-white/50">
          <span>{isDownloading ? `Progresso: ${progress}%` : 'Aguardando ação'}</span>
          <span>Sem Vírus</span>
        </div>
      </div>
    </div>
  )
}