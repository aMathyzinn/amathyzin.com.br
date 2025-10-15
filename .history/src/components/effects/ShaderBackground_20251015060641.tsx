'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Scene & Camera
    const scene = new THREE.Scene()
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    cam.position.z = 1

    // Uniforms (configuráveis conforme necessário)
    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 1 },
      uScale: { value: 1 },
      uRot: { value: 5 },
      uNoise: { value: 0.5 },
      uColor: { value: new THREE.Color(0x261bf5) },
    }

    // Shaders
    const vs = `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `

    const fs = `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime, uSpeed, uScale, uRot, uNoise;
      uniform vec3 uColor;

      float n(vec2 p){
        vec2 r = 2.71828 * sin(2.71828 * p);
        return fract(r.x * r.y * (1.0 + p.x));
      }
      vec2 rot(vec2 p, float a){
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c) * p;
      }

      void main(){
        vec2 uv = rot(vUv * uScale, uRot);
        float t = uTime * uSpeed;
        uv.y += 0.03 * sin(8.0 * uv.x - t);
        float pat = 0.6 + 0.4 * sin(
          5.0 * (uv.x + uv.y + cos(3.0 * uv.x + 5.0 * uv.y) + 0.02 * t)
          + sin(20.0 * (uv.x + uv.y - 0.1 * t))
        );
        vec3 col = uColor * pat - vec3(n(gl_FragCoord.xy)) / 15.0 * uNoise;
        gl_FragColor = vec4(col, 1.0);
      }
    `

    // Material & Mesh
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vs,
      fragmentShader: fs,
    })
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(mesh)

    // Resize handling
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation loop
    let rafId = 0
    const loop = () => {
      uniforms.uTime.value += 0.01
      renderer.render(scene, cam)
      rafId = requestAnimationFrame(loop)
    }
    loop()

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
      material.dispose()
      mesh.geometry.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}

export default ShaderBackground