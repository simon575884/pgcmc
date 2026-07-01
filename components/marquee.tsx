import { Sparkles } from 'lucide-react'

const ITEMS = [
  'WARRIOR LIFESTEAL SMP',
  'SUNDAY TOURNAMENTS',
  'RS. 10,000 PRIZE POOLS',
  'JAVA + BEDROCK CROSSPLAY',
  'WEEKLY GIVEAWAYS',
  'CUSTOM CRATES',
  'DDOS PROTECTED',
  '936+ GAMERS',
]

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-primary/[0.06] py-4">
      <div className="flex shrink-0 animate-marquee items-center">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-6 font-heading text-lg tracking-wide text-foreground/80"
          >
            {item}
            <Sparkles className="size-4 text-primary" />
          </span>
        ))}
      </div>
    </div>
  )
}
