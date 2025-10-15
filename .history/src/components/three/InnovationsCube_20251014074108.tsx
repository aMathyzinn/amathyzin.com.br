'use client'

import { useEffect, useMemo, useState } from 'react'

type DreiModule = typeof import('@react-three/drei')
type FiberModule = typeof import('@react-three/fiber')

export function InnovationsCube() {
  const [drei, setDrei] = useState<DreiModule | null>(null)
  const [fiber, setFiber] = useState<FiberModule | null>(null)

  useEffect(() => {
    let active = true
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei'),
    ]).then(([fiberMod, dreiMod]) => {
      if (!active) return
      setFiber(fiberMod)
      setDrei(dreiMod)
    })
    return () => { active = false }
  }, [])

  const RotatingCube = useMemo(() => {
    if (!drei) return null
    const { Box } = drei
    return function InnerCube() {
      const [hovered, setHovered] = useState(false)
      return (
        <Box
          args={[1, 1, 1]}
          scale={hovered ? 1.2 : 1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={hovered ? '#4ecdc4' : '#ff6b6b'}
            emissive={hovered ? '#4ecdc4' : '#ff6b6b'}
            emissiveIntensity={0.2}
          />
        </Box>
      )
    }
  }, [drei])

  if (!drei || !fiber || !RotatingCube) {
    return <div className="w-full h-full rounded-xl bg-dark/40 border border-primary/20" />
  }

  const { Canvas } = fiber
  const { OrbitControls } = drei

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {RotatingCube ? <RotatingCube /> : null}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
    </Canvas>
  )
}

export default InnovationsCube