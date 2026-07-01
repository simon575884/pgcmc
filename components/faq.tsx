'use client'

import { useState } from 'react'
import { Plus, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'How do I join the Minecraft server?',
    a: 'Open Minecraft 1.20 or newer, add play.pgcmc.fun to your server list, and connect using the Java or Bedrock port shown in the server section above.',
  },
  {
    q: 'How do I register for an event?',
    a: 'Head to our Discord, open the #events channel, and click the registration button on the tournament announcement. Spots are limited and fill up fast.',
  },
  {
    q: 'Can cracked Minecraft accounts join?',
    a: 'Our competitive tournaments require a premium account for fair play, but the Warrior Lifesteal SMP supports both premium and offline-mode players.',
  },
  {
    q: 'What are the server rules?',
    a: 'No cheating, hacking, or exploiting. Be respectful to other players and staff. Full rules are pinned in Discord and enforced consistently by our moderation team.',
  },
  {
    q: 'How do I apply for staff or creator roles?',
    a: 'Visit the Applications section on this page, choose the role that fits you, and submit the form. Our team reviews every application personally.',
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="NEED TO KNOW"
            title={
              <>
                FREQUENTLY
                <br />
                <span className="text-primary">ASKED</span>
              </>
            }
            description="Still stuck? Our support team is one Discord message away."
          />
          <a
            href="#discord"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Get Support
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  isOpen
                    ? 'border-primary/40 bg-card'
                    : 'border-border bg-card/50',
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-foreground">{item.q}</span>
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
