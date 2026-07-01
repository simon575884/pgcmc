import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-heading text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className={cn(
              'mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
