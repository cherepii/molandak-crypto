/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',

  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.js', 'page.jsx'],
})
