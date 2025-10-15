'use client'

import { useEffect, useState } from 'react'

interface ToggleSwitchProps {
  id?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  className?: string
  attentionWhenUnchecked?: boolean
}

export function ToggleSwitch({ 
  id, 
  checked = false, 
  onChange, 
  label, 
  disabled = false,
  className = '',
  attentionWhenUnchecked = false
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState(checked)

  // Sincroniza quando o componente é controlado externamente
  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleToggle = () => {
    if (disabled) return
    
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange?.(newChecked)
  }

  return (
    <label 
      htmlFor={id}
      className={`flex items-center gap-3 cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <div className="relative">
        {/* Indicador pulsante quando está desmarcado e requer atenção */}
        {attentionWhenUnchecked && !isChecked && !disabled && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-full bg-primary/25 animate-ping"
          />
        )}
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
          className="sr-only"
          role="switch"
          aria-checked={isChecked}
        />
        <div 
          className={`
            w-12 h-6 rounded-full transition-all duration-300 ease-in-out
            ${isChecked 
              ? 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30' 
              : 'bg-dark/50 border border-white/20'
            }
            ${disabled ? '' : 'hover:shadow-lg'}
            ${!isChecked && attentionWhenUnchecked && !disabled ? 'ring-2 ring-primary/40' : ''}
          `}
        >
          <div 
            className={`
              w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out
              absolute top-0.5 transform
              ${isChecked ? 'translate-x-6' : 'translate-x-0.5'}
            `}
          />
        </div>
      </div>
      {label && (
        <span className="text-white/80 text-sm select-none">
          {label}
        </span>
      )}
    </label>
  )
}