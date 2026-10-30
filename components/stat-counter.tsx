'use client'

import * as React from 'react'

interface StatCounterProps {
  value: string
  duration?: number
  className?: string
}

/**
 * Renders a stat value (e.g. "$5M+", "15+", "70%") and animates its numeric
 * portion up from 0 the first time it scrolls into view.
 */
export function StatCounter({ value, duration = 1200, className }: StatCounterProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const hasAnimated = React.useRef(false)
  const match = value.match(/[0-9]+(\.[0-9]+)?/)
  const prefix = match ? value.slice(0, match.index) : value
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : ''
  const [display, setDisplay] = React.useState(match ? `${prefix}0${suffix}` : value)

  React.useEffect(() => {
    const el = ref.current
    if (!el || !match) return

    const target = parseFloat(match[0])
    const decimals = match[0].includes('.') ? match[0].split('.')[1].length : 0

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = (target * eased).toFixed(decimals)
            setDisplay(`${prefix}${current}${suffix}`)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  )
}
