import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const REVIEWS = [
  {
    quote:
      'PGC turned Minecraft from a game into a place I genuinely look forward to returning to every single day.',
    initials: 'AA',
    name: 'Ali Ahmed',
    role: 'Member since 2022',
  },
  {
    quote:
      'Won my first tournament here and actually received my prize the same week. The staff genuinely deliver on everything.',
    initials: 'ME',
    name: 'MrElevenXD',
    role: 'Tournament Champion',
  },
  {
    quote:
      'A rare server where the staff listens, updates feel meaningful, and the community actually helps new players.',
    initials: 'SR',
    name: 'Sarah R.',
    role: 'Warrior SMP Player',
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          align="center"
          eyebrow="PLAYER STORIES"
          title={
            <>
              THE COMMUNITY <span className="text-primary">SPEAKS</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 100}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-7"
            >
              <Quote className="size-8 text-primary/30" />
              <div className="mt-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {r.quote}
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {r.initials}
                </span>
                <div>
                  <p className="font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
