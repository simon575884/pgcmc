'use client'

import { useEffect, useMemo, useState } from 'react'

function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)
  return { days, hours, minutes, seconds }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex min-w-[3.25rem] items-center justify-center rounded-lg border border-border bg-background/60 px-2 py-2 font-mono text-2xl font-bold tabular-nums text-foreground">
        {String(value).padStart(2, '0')}
      </div>
      <span className="mt-1.5 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function Countdown({ targetDays = 4 }: { targetDays?: number }) {
  // Fixed target relative to first client render to avoid hydration drift.
  const target = useMemo(
    () => Date.now() + targetDays * 86_400_000 + 5 * 3_600_000 + 33 * 60_000,
    [targetDays],
  )
  const { days, hours, minutes, seconds } = useCountdown(target)

  return (
    <div className="flex items-center gap-2">
      <Unit value={days} label="DAYS" />
      <span className="pb-5 font-heading text-2xl text-primary">:</span>
      <Unit value={hours} label="HRS" />
      <span className="pb-5 font-heading text-2xl text-primary">:</span>
      <Unit value={minutes} label="MIN" />
      <span className="pb-5 font-heading text-2xl text-primary">:</span>
      <Unit value={seconds} label="SEC" />
    </div>
  )
}
