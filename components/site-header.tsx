'use client'

import { useEffect, useState } from 'react'
import { Gamepad2, Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DISCORD_INVITE } from '@/lib/site'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Server', href: '#server' },
  { label: 'Community', href: '#community' },
  { label: 'Apply', href: '#apply' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-md border border-primary/40 bg-primary/15 text-primary">
            <Gamepad2 className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl tracking-wide text-foreground">
              PGC
            </span>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground">
              PAKISTAN GAMERS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-md px-4 py-2 text-sm font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_0_20px_-4px] shadow-primary/60 transition-transform hover:-translate-y-0.5 sm:flex"
          >
            Join Discord
            <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-md border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              Join Discord
              <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
