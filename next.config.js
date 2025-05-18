/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.qrserver.com',"sidrachain.com"], // Allow loading images from api.qrserver.com
  },
  slint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
