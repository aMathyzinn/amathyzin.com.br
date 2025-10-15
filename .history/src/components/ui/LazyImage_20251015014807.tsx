'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface LazyImageProps extends Omit<ImageProps, 'src'> {
  src: string
  fallbackSrc?: string
}

export default function LazyImage({ src, fallbackSrc, alt, className = '', ...props }: LazyImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        quality={85}
        onLoadingComplete={() => setImageLoaded(true)}
        onError={handleError}
        {...props}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}