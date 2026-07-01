'use client'

import { Gamepad2, Play, ArrowUpRight, ChevronDown } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { DISCORD_INVITE } from '@/lib/site'

const AVATARS = [
  { initials: 'AH', color: 'bg-primary/25 text-primary' },
  { initials: 'ZM', color: 'bg-gold/25 text-gold' },
  { initials: 'SK', color: 'bg-chart-4/25 text-chart-4' },
  { initials: 'RB', color: 'bg-secondary text-foreground' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="size-full object-cover object-center"
        />
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/60" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Left */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            PAKISTAN GAMERS COMMUNITY
          </div>

          <h1 className="font-heading text-5xl leading-[0.9] tracking-[-0.01em] text-balance sm:text-6xl md:text-7xl lg:text-[5.75rem]">
            <span className="block text-foreground">PAKISTAN</span>
            <span className="block text-foreground">
              GAMERS <span className="text-stroke">COMMUNITY</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We run weekly Minecraft tournaments, the Warrior Lifesteal SMP, and
            giveaways worth real money — all inside one of Pakistan&apos;s most
            active gaming Discords. Pull up, grab your gamer tag, and let&apos;s
            play.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/70 transition-transform hover:-translate-y-0.5"
            >
              <Gamepad2 className="size-4" />
              Join Discord
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3.5 text-sm font-bold tracking-wide text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
            >
              Register for Event
            </a>
            <a
              href="#server"
              className="inline-flex items-center gap-1.5 px-2 py-3.5 text-sm font-bold tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              <Play className="size-4 fill-current" />
              Play Now
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((a) => (
                <span
                  key={a.initials}
                  className={`flex size-10 items-center justify-center rounded-full border-2 border-background text-xs font-bold ${a.color}`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">936+</span> gamers
              already inside
            </p>
          </div>
        </div>

        {/* Right — live cards */}
        <div className="flex flex-col gap-4">
          <div className="animate-float rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                PGC WARRIOR NETWORK
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                Online
              </span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="font-heading text-3xl text-foreground">SERVER</p>
                <p className="font-heading text-3xl text-primary">STATUS</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-3xl font-bold text-foreground">
                  4
                </p>
                <p className="text-xs text-muted-foreground">players online</p>
              </div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-chart-2" />
            </div>
          </div>

          <div className="rounded-2xl border border-gold/25 bg-card/70 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-bold tracking-wide text-gold">
                REGISTRATION OPEN
              </span>
            </div>
            <p className="mt-3 font-heading text-2xl text-foreground">
              Sunday Minecraft Tournament
            </p>
            <p className="text-sm text-muted-foreground">
              Rs. 10,000 cash prize pool
            </p>
            <div className="mt-4">
              <Countdown targetDays={4} />
            </div>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold py-3 text-sm font-bold tracking-wide text-background shadow-[0_8px_30px_-8px] shadow-gold/60 transition-transform hover:-translate-y-0.5"
            >
              Register Now
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#events"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit items-center gap-2 text-xs font-semibold tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        SCROLL TO EXPLORE
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
