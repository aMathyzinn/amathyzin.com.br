'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PiRocketBold, PiGaugeBold, PiCpuBold, PiLightningBold } from 'react-icons/pi'
import { PiPlayBold, PiPauseBold } from 'react-icons/pi'

type Point = { x: number; y: number }

const GRID_SIZE = 16
const TICK_MS = 140

const itemDefs = [
  { key: 'rocket', Icon: PiRocketBold, color: 'text-secondary', label: '+FPS' },
  { key: 'fps', Icon: PiGaugeBold, color: 'text-primary', label: '+FPS' },
  { key: 'cpu', Icon: PiCpuBold, color: 'text-primary', label: 'Turbo' },
  { key: 'zap', Icon: PiLightningBold, color: 'text-yellow-300', label: 'Boost' },
]

function randomInt(max: number) {
  return Math.floor(Math.random() * max)
}

function pointsEqual(a: Point, b: Point) {
  return a.x === b.x && a.y === b.y
}

export function SnakeGame() {
  const [cellSize, setCellSize] = useState(16)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  const [snake, setSnake] = useState<Point[]>([
    { x: 8, y: 8 },
    { x: 7, y: 8 },
  ])
  const [dir, setDir] = useState<Point>({ x: 1, y: 0 })
  const [growth, setGrowth] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [item, setItem] = useState<{ pos: Point; type: number } | null>(null)
  const [effect, setEffect] = useState<{ id: number; pos: Point; text: string } | null>(null)

  // Measure container to compute cell size
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const resize = () => {
      const size = Math.min(el.clientWidth, el.clientHeight)
      setCellSize(Math.floor(size / GRID_SIZE))
    }
    resize()
    const obs = new ResizeObserver(resize)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Mount flag and initial item spawn (client only)
  useEffect(() => {
    setMounted(true)
    setItem({ pos: { x: randomInt(GRID_SIZE), y: randomInt(GRID_SIZE) }, type: randomInt(itemDefs.length) })
  }, [])

  // Keyboard controls
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (["ArrowUp", "KeyW"].includes(e.code) && dir.y !== 1) setDir({ x: 0, y: -1 })
      else if (["ArrowDown", "KeyS"].includes(e.code) && dir.y !== -1) setDir({ x: 0, y: 1 })
      else if (["ArrowLeft", "KeyA"].includes(e.code) && dir.x !== 1) setDir({ x: -1, y: 0 })
      else if (["ArrowRight", "KeyD"].includes(e.code) && dir.x !== -1) setDir({ x: 1, y: 0 })
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [dir])

  // Auto-pause when component leaves viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && playing) {
          setPlaying(false)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [playing])

  // Game loop
  useEffect(() => {
    if (!playing || !item) return
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0]
        const newHead = { x: head.x + dir.x, y: head.y + dir.y }

        // Wall collision => reset
        if (newHead.x < 0 || newHead.y < 0 || newHead.x >= GRID_SIZE || newHead.y >= GRID_SIZE) {
          return [{ x: 8, y: 8 }, { x: 7, y: 8 }]
        }

        // Self collision => reset
        if (prev.some((p) => pointsEqual(p, newHead))) {
          return [{ x: 8, y: 8 }, { x: 7, y: 8 }]
        }

        const next = [newHead, ...prev]
        if (growth > 0) {
          setGrowth((g) => g - 1)
        } else {
          next.pop()
        }

        // Eat item
        if (item && pointsEqual(newHead, item.pos)) {
          setGrowth((g) => g + 2)
          const type = item.type
          const def = itemDefs[type]
          setEffect({ id: Date.now(), pos: newHead, text: def.label })

          // Spawn new item not on snake
          let pos: Point = { x: randomInt(GRID_SIZE), y: randomInt(GRID_SIZE) }
          let guard = 0
          while (next.some((p) => pointsEqual(p, pos)) && guard < 100) {
            pos = { x: randomInt(GRID_SIZE), y: randomInt(GRID_SIZE) }
            guard++
          }
          setItem({ pos, type: randomInt(itemDefs.length) })
        }

        return next
      })
    }, TICK_MS)
    return () => clearInterval(id)
  }, [dir, item, growth, playing])

  // Effect removal
  useEffect(() => {
    if (!effect) return
    const t = setTimeout(() => setEffect(null), 800)
    return () => clearTimeout(t)
  }, [effect])

  const boardStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${GRID_SIZE}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${GRID_SIZE}, ${cellSize}px)`,
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-dark/40"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_0%,transparent_60%)]" />

      {/* Board as CSS grid */}
      {mounted && (
        <div className="absolute inset-0 grid" style={boardStyle}>
          {/* Snake segments */}
          {snake.map((seg, i) => (
            <div
              key={`s-${i}-${seg.x}-${seg.y}`}
              className={`rounded-sm ${i === 0 ? 'bg-primary' : 'bg-primary/70'} shadow-sm shadow-primary/20`}
              style={{ left: seg.x * cellSize, top: seg.y * cellSize, width: cellSize, height: cellSize, position: 'absolute' }}
            />
          ))}

          {/* Item icon */}
          {item && (
            <div
              className="flex items-center justify-center"
              style={{ left: item.pos.x * cellSize, top: item.pos.y * cellSize, width: cellSize, height: cellSize, position: 'absolute' }}
            >
              {(() => {
                const { Icon, color } = itemDefs[item.type]
                return <Icon className={`${color} text-xl`} />
              })()}
            </div>
          )}
        </div>
      )}

      {/* HUD */}
      <div className="absolute top-2 left-2 text-xs text-white/60">Use as setas/WASD</div>
      {/* Pause/Play button */}
      <button
        onClick={() => setPlaying((p) => !p)}
        className="absolute top-2 right-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white/80"
        aria-label={playing ? 'Pausar' : 'Jogar'}
      >
        {playing ? <PiPauseBold className="text-lg" /> : <PiPlayBold className="text-lg" />}
        <span className="text-xs">{playing ? 'Pausar' : 'Play'}</span>
      </button>

      {/* Eat effect */}
      <AnimatePresence>
        {effect && (
          <motion.div
            key={effect.id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: -16 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute font-bold text-white drop-shadow-md"
            style={{ left: effect.pos.x * cellSize, top: effect.pos.y * cellSize }}
          >
            <span className="px-2 py-1 rounded bg-gradient-to-r from-primary to-secondary text-[10px]">{effect.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-primary/20" />

      {/* Start Overlay */}
      {!playing && (
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setPlaying(true)}
            className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-xl shadow-neon-lg"
          >
            <PiPlayBold />
            Começar
          </motion.button>
        </div>
      )}
    </div>
  )
}

export default SnakeGame