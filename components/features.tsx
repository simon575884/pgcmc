import {
  Puzzle,
  Zap,
  ShieldCheck,
  Users,
  Layers,
  BarChart3,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const FEATURES = [
  {
    icon: Puzzle,
    title: 'Custom Plugins',
    desc: 'Original systems engineered in-house for the PGC experience.',
  },
  {
    icon: Zap,
    title: 'Fast Servers',
    desc: 'Low-latency nodes tuned for smooth gameplay across Pakistan.',
  },
  {
    icon: ShieldCheck,
    title: 'DDoS Protection',
    desc: 'Enterprise-grade protection keeps the game online 24/7.',
  },
  {
    icon: Users,
    title: 'Friendly Community',
    desc: 'A welcoming place where every kind of gamer belongs.',
  },
  {
    icon: Layers,
    title: 'Crossplay',
    desc: 'Java and Bedrock players united in one shared world.',
  },
  {
    icon: BarChart3,
    title: 'Leaderboards',
    desc: 'Prove it. Climb the ranks and cement your legacy.',
  },
]

export function Features() {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          align="center"
          eyebrow="BUILT DIFFERENT"
          title={
            <>
              EVERYTHING YOU NEED
              <br />
              <span className="text-primary">TO PLAY YOUR WAY</span>
            </>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 60}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <f.icon className="size-6" />
              </span>
              <h3 className="relative mt-5 font-heading text-xl tracking-wide text-foreground">
                {f.title.toUpperCase()}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
