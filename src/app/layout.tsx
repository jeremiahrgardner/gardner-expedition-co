import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Gardner Expedition Co.',
    template: '%s | Gardner Expedition Co.',
  },
  description: 'An intellectual ecosystem for frameworks, diagnostics, essays, and applied exploration in organizational growth and human development.',
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23000'/><text x='16' y='22' font-size='18' text-anchor='middle' fill='%23f1c233' font-family='serif'>G</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}