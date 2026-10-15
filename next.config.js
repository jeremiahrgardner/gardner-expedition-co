/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
    ]
  },
}
module.exports = nextConfig
