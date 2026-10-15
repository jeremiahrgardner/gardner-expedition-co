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
      {
        source: '/articles/Why-High-Performers-Often-Feel-Unstable-During-Growthand-What-to-Do-About-It',
        destination: '/articles/Why-High-Performers-Often-Feel-Unstable-During-Growth-and-What-to-Do-About-It',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
