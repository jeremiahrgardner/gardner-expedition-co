"use client"

import { track } from '@/lib/posthog'
import type { NextStep } from '@/lib/article-conversion'

export default function ArticleNextStep({ step }: { step: NextStep }) {
  return (
    <aside className="article-next-step" aria-labelledby="article-next-step-heading">
      <p className="eyebrow">{step.eyebrow}</p>
      <h2 id="article-next-step-heading">{step.heading}</h2>
      <p>{step.text}</p>
      <a href={step.href} onClick={() => track('next_step_click', { destination: step.id })}>
        {step.linkLabel} <span aria-hidden="true">→</span>
      </a>
    </aside>
  )
}
