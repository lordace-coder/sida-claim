/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.qrserver.com', // Allow loading images from api.qrserver.com
      'sidrachain.com', // Allow loading images from sidrachain.com
    ],
  },
}

module.exports = nextConfig
