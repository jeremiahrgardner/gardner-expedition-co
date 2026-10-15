import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import { organizationAndWebsite } from '@/lib/structured-data'
import { SITE_URL } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gardner Expedition Co.',
    template: '%s | Gardner Expedition Co.',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Gardner Expedition Co.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/GEC_Primary_Icon.png" />
        <link rel="apple-touch-icon" href="/GEC_Primary_Icon.png" />
      </head>
      <body>
        <StructuredData data={organizationAndWebsite} />
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}