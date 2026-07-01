'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/section-heading'

type Category = 'all' | 'events' | 'builds' | 'community'

const ITEMS: {
  src: string
  title: string
  tag: string
  category: Exclude<Category, 'all'>
  span?: boolean
}[] = [
  {
    src: '/images/gallery-castle.png',
    title: 'Warrior Castle',
    tag: 'Featured Build',
    category: 'builds',
    span: true,
  },
  {
    src: '/images/gallery-pvp.png',
    title: 'PvP Finals',
    tag: 'Tournament',
    category: 'events',
  },
  {
    src: '/images/gallery-portal.png',
    title: 'Portal District',
    tag: 'Server World',
    category: 'builds',
  },
  {
    src: '/images/gallery-prizes.png',
    title: 'PS5 & Games Giveaway',
    tag: 'Community',
    category: 'community',
    span: true,
  },
]

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Events', value: 'events' },
  { label: 'Builds', value: 'builds' },
  { label: 'Community', value: 'community' },
]

export function Gallery() {
  const [active, setActive] = useState<Category>('all')
  const items = ITEMS.filter((i) => active === 'all' || i.category === active)

  return (
    <section
      id="community"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="FROM THE COMMUNITY"
            title={
              <>
                PGC IN <span className="text-primary">ACTION</span>
              </>
            }
          />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === f.value
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-3xl border border-border ${
                item.span ? 'sm:col-span-2 lg:row-span-2 lg:h-full' : ''
              }`}
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={item.title}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                  {item.tag}
                </span>
                <p className="mt-2 font-heading text-xl text-foreground">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
