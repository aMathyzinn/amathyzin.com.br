export const runtime = 'edge'

export async function GET() {
  const swContent = `
    const CACHE_NAME = 'amathyzin-v1'
    const urlsToCache = [
      '/',
      '/downloads',
      '/sobre',
      '/globals.css',
      '/manifest.json'
    ]

    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then((cache) => cache.addAll(urlsToCache))
      )
    })

    self.addEventListener('fetch', (event) => {
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            if (response) {
              return response
            }
            return fetch(event.request)
          })
      )
    })
  `

  return new Response(swContent, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  })
}