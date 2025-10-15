'use client'

import { useState } from 'react'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'
import { FaDownload } from 'react-icons/fa'

interface TermsDownloadProps {
  fileName: string
}

export default function TermsDownload({ fileName }: TermsDownloadProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const disabled = !acceptedTerms

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (disabled) {
      e.preventDefault()
      e.stopPropagation()
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

      <a
        href={`/downloads/files/${fileName}`}
        onClick={handleClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={`btn-primary w-full justify-center shine-effect group ${
          disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
        }`}
      >
        <FaDownload className="group-hover:animate-bounce" /> Baixar Agora
      </a>

      <div className="flex justify-between text-xs text-white/50 border-t border-white/10 pt-3">
        <span>Verificado</span>
        <span>Sem Vírus</span>
      </div>
    </div>
  )
}