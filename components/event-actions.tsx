'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  X,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Swords,
} from 'lucide-react'
import { DISCORD_INVITE } from '@/lib/site'

export function EventActions() {
  const [spotOpen, setSpotOpen] = useState(false)
  const [rulesOpen, setRulesOpen] = useState(false)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setSpotOpen(true)}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/70 transition-transform hover:-translate-y-0.5"
        >
          Secure Your Spot
          <ArrowRight className="size-4" />
        </button>
        <button
          onClick={() => setRulesOpen(true)}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 py-3 text-sm font-bold text-foreground backdrop-blur transition-colors hover:border-primary/50"
        >
          View Rules
        </button>
      </div>

      {/* Secure Your Spot dialog */}
      <Modal open={spotOpen} onClose={() => setSpotOpen(false)} title="How To Register">
        <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4">
          <Swords className="size-6 shrink-0 text-primary" />
          <p className="text-sm text-foreground">
            Registration for every tournament runs through our Discord server —
            that&apos;s where the sign-up button, brackets and match lobbies go
            live.
          </p>
        </div>

        <ol className="mt-5 flex flex-col gap-4">
          <Step n="1" text={<>Click the join button below to open the PGC Discord.</>} />
          <Step
            n="2"
            text={
              <>
                Open the <span className="font-semibold text-primary">#events</span>{' '}
                channel and check the pinned post for{' '}
                <span className="font-semibold text-foreground">
                  next Sunday&apos;s event
                </span>
                .
              </>
            }
          />
          <Step
            n="3"
            text={<>Hit the ✅ react / register button on the announcement to lock your slot.</>}
          />
        </ol>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <MetaCard icon={<Calendar className="size-4" />} label="When" value="Every Sunday" />
          <MetaCard icon={<Clock className="size-4" />} label="Kickoff" value="8:00 PM PKT" />
          <MetaCard icon={<MapPin className="size-4" />} label="Where" value="#events" />
        </div>

        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/70 transition-transform hover:-translate-y-0.5"
        >
          Go To Discord
          <ExternalLink className="size-4" />
        </a>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Spots are first-come, first-served and they go quick.
        </p>
      </Modal>

      {/* Rules dialog */}
      <Modal open={rulesOpen} onClose={() => setRulesOpen(false)} title="Tournament Rules">
        <p className="text-sm text-muted-foreground">
          Keep it clean and keep it fun. Break these and the mods will pull you
          from the bracket — no arguments.
        </p>

        <div className="mt-5 flex flex-col gap-5">
          <RuleGroup
            heading="Before The Match"
            rules={[
              'Register in #events before the deadline. Late entries wait for the next one.',
              'Be in the voice lobby 10 minutes early. If we call your name twice and you\u2019re AFK, your slot goes to a sub.',
              'Use the exact IGN you registered with. Alt accounts get disqualified.',
            ]}
          />
          <RuleGroup
            heading="During The Match"
            rules={[
              'No hacked clients, X-ray, macros or auto-clickers. We record and review the finals.',
              'Teaming in a solo event is an instant ban from the season.',
              'Lag out? Take a screenshot of your disconnect. Rejoins are allowed once per round if you can prove it.',
              'Trash talk is fine, slurs and doxxing are not. Straight ban.',
            ]}
          />
          <RuleGroup
            heading="Prizes & Disputes"
            rules={[
              'Prizes are paid out within 48 hours of the finals via the method in your DM.',
              'A staff decision on the day is final. Bring clips, not attitude.',
            ]}
          />
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-background/50 p-4">
          <p className="text-xs text-muted-foreground">
            Rules get tweaked every season based on your feedback in{' '}
            <span className="font-semibold text-foreground">#suggestions</span>.
            Full rulebook lives in the Discord.
          </p>
        </div>

        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          Read Full Rulebook On Discord
          <ExternalLink className="size-4" />
        </a>
      </Modal>
    </>
  )
}

function Step({ n, text }: { n: string; text: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-heading text-sm text-primary">
        {n}
      </span>
      <span className="pt-0.5 text-sm text-muted-foreground">{text}</span>
    </li>
  )
}

function MetaCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-3 text-center">
      <span className="flex justify-center text-primary">{icon}</span>
      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="text-xs font-bold text-foreground">{value}</p>
    </div>
  )
}

function RuleGroup({ heading, rules }: { heading: string; rules: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
        {heading}
      </h4>
      <ul className="mt-3 flex flex-col gap-2.5">
        {rules.map((r, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span className="leading-relaxed">{r}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-border bg-card p-6 shadow-2xl animate-in slide-in-from-bottom-4 sm:rounded-3xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl text-foreground md:text-3xl">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  )
}
