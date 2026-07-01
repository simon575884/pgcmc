import { Shield, Code2, Video, Check, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const ROLES = [
  {
    num: '01',
    icon: Shield,
    title: 'Staff Team',
    desc: 'Keep the community fair, welcoming and alive.',
    points: [
      'Age 13+ & active voice chat',
      'Moderator & Discord management',
      'Graphic and creative design',
    ],
    cta: 'Apply for Staff',
  },
  {
    num: '02',
    icon: Code2,
    title: 'Developers',
    desc: 'Build the systems that power the PGC experience.',
    points: [
      'Java, plugins & Skript',
      'Configuration & optimization',
      'Testing, teamwork & craft',
    ],
    cta: 'Apply as Developer',
    featured: true,
  },
  {
    num: '03',
    icon: Video,
    title: 'Creator Program',
    desc: 'Turn your audience into something unforgettable.',
    points: [
      'Verified creator role',
      'Exclusive events & support',
      'Community-wide promotion',
    ],
    cta: 'Join Creator Program',
  },
]

export function Applications() {
  return (
    <section
      id="apply"
      className="relative border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          align="center"
          eyebrow="BUILD WITH US"
          title={
            <>
              FIND YOUR PLACE
              <br />
              <span className="text-primary">IN THE TEAM</span>
            </>
          }
          description="PGC is built by passionate people. Bring your talent, shape the community, and level up with us."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ROLES.map((role, i) => (
            <Reveal
              key={role.title}
              delay={i * 100}
              className={`group relative flex flex-col rounded-3xl border p-6 transition-all hover:-translate-y-1 md:p-8 ${
                role.featured
                  ? 'border-primary/50 bg-primary/[0.06]'
                  : 'border-border bg-card'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <role.icon className="size-6" />
                </span>
                <span className="font-heading text-4xl text-border">
                  {role.num}
                </span>
              </div>

              <h3 className="mt-6 font-heading text-2xl text-foreground">
                {role.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{role.desc}</p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                {role.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" />
                    </span>
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  role.featured
                    ? 'bg-primary text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/70'
                    : 'border border-border text-foreground hover:border-primary/50 hover:text-primary'
                }`}
              >
                {role.cta}
                <ArrowRight className="size-4" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
