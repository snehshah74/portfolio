'use client'

import * as React from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

interface MobileNavProps {
  activeSection?: string | null
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="p-2 -mr-2 text-foreground"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div
          id="mobile-nav-menu"
          className="absolute left-0 right-0 top-full border-b border-border bg-background px-4 py-2 flex flex-col shadow-lg animate-fade-in"
        >
          {links.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'py-3 px-2 rounded-md transition-colors font-medium',
                  isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary hover:bg-muted/50',
                )}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
