const ManifestPluginModule = require("webpack-manifest-plugin");
const WebpackManifestPlugin =
  ManifestPluginModule.WebpackManifestPlugin ||
  ManifestPluginModule.default ||
  ManifestPluginModule;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  eslint: {
    enable: false, // désactive eslint-loader intégré (on utilise eslint-webpack-plugin)
  },
  babel: {
    plugins: [
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-transform-private-methods", { loose: true }],
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      "@babel/plugin-proposal-optional-chaining",
    ],
  },
  webpack: {
    configure: (webpackConfig) => {
      // DevServer
      webpackConfig.devServer = {
        ...webpackConfig.devServer,
        hot: true,
        liveReload: true,
      };

      // Watch options
      webpackConfig.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
      };

      // Sécurité : vérifier que rules existe et est un tableau
      if (!Array.isArray(webpackConfig.module.rules)) {
        webpackConfig.module.rules = [];
      }
      webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });

      // Supprimer les anciennes instances de ManifestPlugin
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => !(plugin instanceof WebpackManifestPlugin)
      );

      // Config output JS/CSS
      webpackConfig.output.filename = "static/js/[name].js";
      webpackConfig.output.chunkFilename = "static/js/[name].chunk.js";

      webpackConfig.plugins = webpackConfig.plugins.map((plugin) => {
        if (plugin instanceof MiniCssExtractPlugin) {
          return new MiniCssExtractPlugin({
            ...plugin.options,
            filename: "static/css/[name].css",
            chunkFilename: "static/css/[name].chunk.css",
          });
        }
        return plugin;
      });

      // Réinjection ManifestPlugin
      webpackConfig.plugins.push(
        new WebpackManifestPlugin({
          fileName: "asset-manifest.json",
          publicPath: "/static/",
          writeToFileEmit: true,
          map: (file) => {
            if (file.name.startsWith("main")) {
              if (file.name.endsWith(".js")) {
                file.path = "/static/js/main.js";
              } else if (file.name.endsWith(".css")) {
                file.path = "/static/css/main.css";
              }
            }
            return file;
          },
        })
      );

      // Ajout ESLintPlugin si pas déjà présent
      const hasESLintPlugin = webpackConfig.plugins.some(
        (plugin) => plugin instanceof ESLintPlugin
      );
      if (!hasESLintPlugin) {
        webpackConfig.plugins.push(
          new ESLintPlugin({
            extensions: ["js", "jsx"],
          })
        );
      }

      // Debug length rules (optionnel, à supprimer si trop verbeux)
      console.log("webpackConfig.module.rules.length:", webpackConfig.module.rules.length);

      return webpackConfig;
    },
  },
  env: {
    FAST_REFRESH: true,
  },
};
