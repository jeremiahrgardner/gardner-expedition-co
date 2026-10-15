'use client'

import { useEffect } from 'react'
import { initPostHog } from '@/lib/posthog'

// Starts PostHog on the client. Renders nothing; inert without NEXT_PUBLIC_POSTHOG_KEY.
export default function PostHogInit() {
  useEffect(() => {
    initPostHog()
  }, [])
  return null
}
