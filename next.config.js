module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return {
      test: /hammerjs/,
      loader: "bundle-loader",
      options: {
        lazy: true,
      },
    };
  },
};
