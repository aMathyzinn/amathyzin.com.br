'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.name) {
          case 'LCP':
            console.log('Largest Contentful Paint:', entry.startTime)
            break
          case 'FID':
            console.log('First Input Delay:', entry.processingStart - entry.startTime)
            break
          case 'CLS':
            console.log('Cumulative Layout Shift:', entry.value)
            break
        }
      }
    })

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Monitor load times
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      console.log('Page Load Time:', loadTime + 'ms')
      
      // Send to analytics (you can replace with your analytics service)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_load_time', {
          value: Math.round(loadTime)
        })
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}