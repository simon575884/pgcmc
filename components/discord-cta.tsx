import { Gamepad2, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { DISCORD_INVITE } from '@/lib/site'

export function DiscordCta() {
  return (
    <section
      id="discord"
      className="relative overflow-hidden border-t border-border py-20 md:py-28"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-40" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <span className="inline-flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-primary">
            <Gamepad2 className="size-8" />
          </span>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 text-xs font-bold tracking-[0.3em] text-primary">
            THE CONVERSATION NEVER STOPS
          </p>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="mt-4 font-heading text-4xl leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
            YOUR NEXT SQUAD
            <br />
            IS <span className="text-primary">WAITING.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Most of our matches, giveaways, and late-night voice calls happen on
            Discord first. Hop in, say salam in general, and you&apos;ll find
            your squad by the weekend.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/70 transition-transform hover:-translate-y-0.5"
          >
            <Gamepad2 className="size-5" />
            Join the PGC Discord
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>

        <Reveal
          delay={320}
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4 rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-xl sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="font-bold text-foreground">
              Pakistan Gamers Community
            </p>
            <p className="font-mono text-sm text-primary">discord.gg/pgcmc</p>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="font-heading text-2xl text-foreground">936</p>
              <p className="text-[10px] tracking-widest text-muted-foreground">
                MEMBERS
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl text-primary">525</p>
              <p className="text-[10px] tracking-widest text-muted-foreground">
                ONLINE NOW
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
