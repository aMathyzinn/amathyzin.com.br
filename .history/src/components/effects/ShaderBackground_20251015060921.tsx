'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 1 },
      uScale: { value: 1 },
      uRot: { value: 5 },
      uNoise: { value: 0.5 },
      // Vermelho em vez de azul
      uColor: { value: new THREE.Color(0xff1a1a) },
    }

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
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

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(mesh)

    let raf = 0
    const animate = () => {
      uniforms.uTime.value += 0.01
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
      material.dispose()
      mesh.geometry.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none"
    />
  )
}