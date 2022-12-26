const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer({
  images: {
    domains: ['y.yarn.co', 'hanselmanblogcontent.azureedge.net', 'i.imgur.com'],
  },
})