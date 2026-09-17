'use client'

import * as React from 'react'
import { ChevronDown, type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface CaseStudyCardProps {
  icon: LucideIcon
  badges: { label: string; variant?: 'solid' | 'outline' }[]
  title: string
  description: string
  role: string
  approach: string
  outcome: string
}

export function CaseStudyCard({ icon: Icon, badges, title, description, role, approach, outcome }: CaseStudyCardProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-gradient-to-br from-card to-muted/30">
      <CardHeader className="p-0">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center">
          <Icon className="h-14 w-14 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {badges.map((b) =>
            b.variant === 'outline' ? (
              <Badge key={b.label} variant="outline" className="border-accent/50 text-accent font-medium">
                {b.label}
              </Badge>
            ) : (
              <Badge key={b.label} className="bg-primary text-primary-foreground border-0 font-medium">
                {b.label}
              </Badge>
            ),
          )}
        </div>
        <CardTitle className="mb-2 group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="mb-4 leading-relaxed">{description}</CardDescription>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
        >
          {open ? 'Hide Details' : 'Read Case Study'}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="mt-4 pt-4 border-t border-border space-y-3 text-sm animate-fade-in">
            <div>
              <div className="font-semibold text-foreground mb-1">Role</div>
              <p className="text-muted-foreground leading-relaxed">{role}</p>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Approach</div>
              <p className="text-muted-foreground leading-relaxed">{approach}</p>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Outcome</div>
              <p className="text-muted-foreground leading-relaxed">{outcome}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
