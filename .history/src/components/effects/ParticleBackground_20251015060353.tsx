'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    // Scenes and cameras
    const bgScene = new THREE.Scene()
    const mainScene = new THREE.Scene()

    const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    orthoCamera.position.z = 1

    const perspectiveCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    perspectiveCamera.position.z = 2

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Background shader (red tone matching site primary #ff6b6b)
    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 1 },
      uScale: { value: 1 },
      uRot: { value: 5 },
      uNoise: { value: 0.5 },
      uColor: { value: new THREE.Color('#ff6b6b') },
    }

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime, uSpeed, uScale, uRot, uNoise;
      uniform vec3 uColor;

      float n(vec2 p){ vec2 r = 2.71828*sin(2.71828*p); return fract(r.x*r.y*(1.0+p.x)); }
      vec2 rot(vec2 p,float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c)*p; }

      void main(){
        vec2 uv = rot(vUv * uScale, uRot);
        float t = uTime * uSpeed;
        uv.y += 0.03 * sin(8.0*uv.x - t);
        float pat = 0.6 + 0.4 * sin(
          5.0*(uv.x+uv.y + cos(3.0*uv.x+5.0*uv.y) + 0.02*t)
          + sin(20.0*(uv.x+uv.y - 0.1*t))
        );
        vec3 col = uColor * pat - vec3(n(gl_FragCoord.xy))/15.0 * uNoise;
        gl_FragColor = vec4(col, 1.0);
      }
    `

    const bgMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: false,
    })
    const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial)
    bgScene.add(bgMesh)

    // Particles (single red tone for consistency)
    const particleCount = 1500
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 5
      positions[i + 1] = (Math.random() - 0.5) * 5
      positions[i + 2] = (Math.random() - 0.5) * 5

      // Primary red tone (#ff6b6b)
      colors[i] = 1.0
      colors[i + 1] = 0.42
      colors[i + 2] = 0.42
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.005,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    mainScene.add(particles)

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
      uniforms.uTime.value = elapsedTime

      // Rotate particles
      particles.rotation.y = elapsedTime * 0.05
      particles.rotation.x = elapsedTime * 0.03

      // Mouse interaction
      particles.rotation.x += (mousePosition.current.y * 0.1 - particles.rotation.x) * 0.02
      particles.rotation.y += (mousePosition.current.x * 0.1 - particles.rotation.y) * 0.02

      // Render background then particles
      renderer.clear()
      renderer.render(bgScene, orthoCamera)
      renderer.render(mainScene, perspectiveCamera)
    }

    // Handle resize
    const handleResize = () => {
      perspectiveCamera.aspect = window.innerWidth / window.innerHeight
      perspectiveCamera.updateProjectionMatrix()
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
      bgMaterial.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  )
}