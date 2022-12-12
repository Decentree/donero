///** @type {import('next').NextConfig} */
//const nextConfig = {
//  reactStrictMode: true,
//  swcMinify: true,
//}

//module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })

    return config
  }
}

module.exports = nextConfig
