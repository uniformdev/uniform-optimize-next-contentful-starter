module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_UA_ID,
    segmentTrackingId: process.env.SEGMENT_ID,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
