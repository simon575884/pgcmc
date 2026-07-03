import { Heart, Play } from 'lucide-react'

const COLUMNS = [
  {
    title: 'EXPLORE',
    links: ['Events', 'Servers', 'Gallery', 'Support'],
  },
  {
    title: 'COMMUNITY',
    links: ['Applications', 'Discord', 'Leaderboards', 'News'],
  },
  {
    title: 'LEGAL',
    links: ['Privacy Policy', 'Terms of Service', 'Server Rules'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/images/pgc-logo.png"
                alt="PGC Logo"
                className="h-10 w-10 rounded-md"
              />
              <span className="flex flex-col leading-none">
                <span className="font-heading text-xl tracking-wide text-foreground">
                  PGC
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground">
                  PAKISTAN GAMERS
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pakistan&apos;s home for competitive gaming, Minecraft, and a
              community that never logs off.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.youtube.com/@BlueTickReloaded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex size-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-red-600 hover:text-white"
              >
                <Play className="size-5 fill-current" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Pakistan Gamers Community. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart className="size-3.5 fill-primary text-primary" />{' '}
            in Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
