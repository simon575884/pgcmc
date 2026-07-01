'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 936, suffix: '+', label: 'Discord Members' },
  { value: 2400, suffix: '+', label: 'Unique Players' },
  { value: 48, suffix: '', label: 'Events Hosted' },
  { value: 150000, suffix: '', prefix: 'Rs. ', label: 'Prizes Given' },
]

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, duration])
  return value
}

function StatItem({
  stat,
  run,
}: {
  stat: (typeof STATS)[number]
  run: boolean
}) {
  const value = useCountUp(stat.value, run)
  return (
    <div className="text-center">
      <p className="font-heading text-4xl text-primary md:text-5xl lg:text-6xl">
        {stat.prefix}
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground md:text-sm">
        {stat.label.toUpperCase()}
      </p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="border-y border-border bg-card/40">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 md:grid-cols-4 md:px-6 md:py-16"
      >
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} run={run} />
        ))}
      </div>
    </section>
  )
}
