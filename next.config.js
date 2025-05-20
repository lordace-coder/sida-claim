/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.qrserver.com',"sidrachain.com"], // Allow loading images from api.qrserver.com
  },  eslint: {
    ignoreDuringBuilds: true
  },
}

module.exports = nextConfig
