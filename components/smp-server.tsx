'use client'

import { useState } from 'react'
import { Heart, Swords, Box, Home, RefreshCw, Copy, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { LiveServerStatus } from '@/components/live-server-status'

const FEATURES = [
  { icon: Heart, title: 'Steal Hearts', desc: 'Defeat players, gain power' },
  { icon: Swords, title: 'Intense PvP', desc: 'Skill-based combat' },
  { icon: Box, title: 'Custom Crates', desc: 'Exclusive weekly loot' },
  { icon: Home, title: 'Build Bases', desc: 'Create your stronghold' },
  { icon: RefreshCw, title: 'Weekly Updates', desc: 'Fresh content, always' },
]

export function SmpServer() {
  const [edition, setEdition] = useState<'java' | 'bedrock'>('java')
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('play.pgcmc.fun:25568')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section
      id="server"
      className="relative overflow-hidden border-t border-border py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/smp.png"
          alt=""
          className="size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="PGC EXCLUSIVE SERVER"
              title={
                <>
                  WARRIOR
                  <br />
                  <span className="text-primary">LIFESTEAL</span> SMP
                </>
              }
              description="Every fight matters. Every heart counts. Build your legacy in Pakistan's most competitive crossplay survival world."
            />

            <div className="mt-8 space-y-4">
              <LiveServerStatus />
              <div className="flex flex-wrap gap-6">
                <LiveStat value="249ms" label="Avg ping" />
                <LiveStat value="1.20+" label="Version" />
              </div>
            </div>
          </div>

          {/* Connect card */}
          <Reveal delay={100} className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur-xl md:p-8">
            <div className="flex rounded-xl border border-border bg-background/60 p-1">
              {(['java', 'bedrock'] as const).map((e) => (
                <button
                  key={e}
                  onClick={() => setEdition(e)}
                  className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-bold capitalize transition-colors ${
                    edition === e
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {e} Edition
                </button>
              ))}
            </div>

            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
              SERVER ADDRESS
            </p>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  IP Address
                </p>
                <p className="truncate font-mono text-lg font-bold text-foreground">
                  play.pgcmc.fun
                </p>
              </div>
              <button
                onClick={copy}
                aria-label="Copy server address"
                className="flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors hover:bg-primary/25"
              >
                {copied ? (
                  <Check className="size-5" />
                ) : (
                  <Copy className="size-5" />
                )}
              </button>
            </div>

            <button
              onClick={copy}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/70 transition-transform hover:-translate-y-0.5"
            >
              {copied ? 'Copied to clipboard!' : 'Copy IP & Start Playing'}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Supports Minecraft 1.20+ • Java &amp; Bedrock crossplay
            </p>
          </Reveal>
        </div>

        {/* Feature strip */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 70}
              className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                <f.icon className="size-5" />
              </span>
              <p className="mt-4 font-bold text-foreground">{f.title}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function LiveStat({
  value,
  label,
  pulse,
}: {
  value: string
  label: string
  pulse?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      {pulse && (
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
          <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
        </span>
      )}
      <div>
        <p className="font-heading text-2xl text-foreground">{value}</p>
        <p className="text-xs tracking-wide text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}
