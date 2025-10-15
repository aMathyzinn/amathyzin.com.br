'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup with optimized settings
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // Disable antialiasing for better performance
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // Reduced pixel ratio
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Particles - reduced count for better performance
    const particleCount = 800 // Reduced from 1500 to 800
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 5
      positions[i + 1] = (Math.random() - 0.5) * 5
      positions[i + 2] = (Math.random() - 0.5) * 5

      // Color variation between primary and secondary
      const colorChoice = Math.random()
      if (colorChoice < 0.5) {
        colors[i] = 1.0 // R
        colors[i + 1] = 0.42 // G
        colors[i + 2] = 0.42 // B
      } else {
        colors[i] = 0.31 // R
        colors[i + 1] = 0.8 // G
        colors[i + 2] = 0.77 // B
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.005,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let animationId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particles.rotation.y = elapsedTime * 0.05
      particles.rotation.x = elapsedTime * 0.03

      // Mouse interaction
      particles.rotation.x += (mousePosition.current.y * 0.1 - particles.rotation.x) * 0.02
      particles.rotation.y += (mousePosition.current.x * 0.1 - particles.rotation.y) * 0.02

      renderer.render(scene, camera)
    }

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  )
}