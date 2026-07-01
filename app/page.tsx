import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Events } from '@/components/events'
import { SmpServer } from '@/components/smp-server'
import { Applications } from '@/components/applications'
import { Stats } from '@/components/stats'
import { Features } from '@/components/features'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { DiscordCta } from '@/components/discord-cta'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Events />
        <SmpServer />
        <Applications />
        <Stats />
        <Features />
        <Gallery />
        <Testimonials />
        <Faq />
        <DiscordCta />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  )
}
