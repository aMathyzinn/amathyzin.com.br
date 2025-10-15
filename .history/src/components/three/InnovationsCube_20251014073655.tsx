'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { useState } from 'react'

function RotatingCube() {
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

export function InnovationsCube() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
    </Canvas>
  )
}

export default InnovationsCube