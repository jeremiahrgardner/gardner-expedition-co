/** @type {import('next').NextConfig} */
const nextConfig = {
  // PostHog's API paths end in a slash, so Next's automatic trailing-slash
  // redirect is switched off and re-added below for every path except /ingest.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    // First-party proxy for PostHog (US cloud) so ad blockers don't drop events.
    return [
      { source: '/ingest/static/:path*', destination: 'https://us-assets.i.posthog.com/static/:path*' },
      { source: '/ingest/array/:path*', destination: 'https://us-assets.i.posthog.com/array/:path*' },
      { source: '/ingest/:path*', destination: 'https://us.i.posthog.com/:path*' },
    ]
  },
  async redirects() {
    return [
      { source: '/:path((?!ingest(?:/|$)).+)/', destination: '/:path', permanent: true },
      {
        source: '/frameworks/cave-growth',
        destination: '/frameworks/the-search',
        permanent: true,
      },
      {
        source: '/frameworks/cavey-growth',
        destination: '/frameworks/the-search',
        permanent: true,
      },
      {
        source: '/articles/Why-High-Performers-Often-Feel-Unstable-During-Growthand-What-to-Do-About-It',
        destination: '/articles/Why-High-Performers-Often-Feel-Unstable-During-Growth-and-What-to-Do-About-It',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
