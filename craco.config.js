const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        "@": path.resolve(__dirname, "src"),
      };
      return webpackConfig;
    },
  },
};
