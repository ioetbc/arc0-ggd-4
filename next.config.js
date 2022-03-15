// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     return {
//       test: /hammerjs/,
//       loader: "bundle-loader",
//       options: {
//         lazy: true,
//       },
//     };
//   },
// };

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /hammerjs/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "bundle-loader",
          options: {
            lazy: true,
          },
        },
      ],
    });

    return config;
  },
};
