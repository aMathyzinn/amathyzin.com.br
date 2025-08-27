'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-dark flex items-center justify-center"
        >
          <div className="relative">
            {/* Spinner */}
            <div className="w-20 h-20 border-4 border-gray-600 border-t-primary rounded-full animate-spin" />
            
            {/* Logo Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <h1 className="text-2xl font-bold text-gradient">aMathyzin</h1>
              <p className="text-white/60 text-sm mt-1">Carregando...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}