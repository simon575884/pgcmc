import { Crown, Trophy, Clock, Ticket, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { EventActions } from '@/components/event-actions'

const CHAMPIONS = [
  { rank: '01', initials: 'DF', name: 'DarkF1amez', prize: 'Rs. 5,000' },
  { rank: '02', initials: 'ME', name: 'MrElevenXD', prize: 'Premium Account' },
  { rank: '03', initials: 'ZA', name: 'ZoraawarKhan', prize: 'Gaming Headset' },
]

export function Events() {
  return (
    <section
      id="events"
      className="relative border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="NEXT BIG EVENT"
          title={
            <>
              SUNDAY MINECRAFT
              <br />
              <span className="text-primary">TOURNAMENT</span>
            </>
          }
          description="Battle Pakistan's sharpest players in a high-stakes survival showdown. One arena. One champion. Real prizes."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured tournament */}
          <Reveal className="group relative overflow-hidden rounded-3xl border border-border">
            <img
              src="/images/tournament.png"
              alt="Custom Minecraft PvP tournament arena"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />

            <div className="relative flex h-full flex-col p-6 md:p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center rounded-xl border border-primary/40 bg-background/70 px-3 py-2 backdrop-blur">
                    <span className="font-heading text-2xl text-foreground">
                      07
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-primary">
                      JUL
                    </span>
                  </div>
                  <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground backdrop-blur">
                    SOLO • SURVIVAL
                  </span>
                </div>
                <Crown className="size-7 text-gold" />
              </div>

              <div className="mt-auto pt-24">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/20 px-3 py-1 text-xs font-bold text-destructive">
                  65 SPOTS REMAINING
                </span>
                <h3 className="mt-4 font-heading text-3xl leading-none text-foreground md:text-4xl">
                  THE LAST CRAFTER
                  <br />
                  STANDING
                </h3>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Survive the elements, outplay your rivals and be the final
                  player standing in our custom-built arena.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Stat icon={<Trophy className="size-4" />} label="Prize Pool" value="Rs. 10,000" />
                  <Stat icon={<Clock className="size-4" />} label="Starts At" value="8:00 PM" />
                  <Stat icon={<Ticket className="size-4" />} label="Entry" value="Free" />
                </div>

                <div className="mt-6">
                  <EventActions />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hall of fame */}
          <Reveal delay={120} className="flex flex-col rounded-3xl border border-border bg-card p-6 md:p-8">
            <span className="text-xs font-bold tracking-[0.25em] text-gold">
              HALL OF FAME
            </span>
            <h3 className="mt-2 font-heading text-3xl text-foreground">
              PAST CHAMPIONS
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {CHAMPIONS.map((c) => (
                <div
                  key={c.rank}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="font-heading text-2xl text-muted-foreground">
                    {c.rank}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {c.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold text-foreground">
                      {c.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Tournament Champion
                    </p>
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                    {c.prize}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-border py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary">
              View Full Leaderboard
              <ArrowRight className="size-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-3 backdrop-blur">
      <span className="flex items-center gap-1.5 text-primary">{icon}</span>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="font-bold text-foreground">{value}</p>
    </div>
  )
}
