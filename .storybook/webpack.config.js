module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              localIdentName: "[local]-[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
            // options: {
            //   data:
            //     '@import "./packages/nk-styles/src/base/nutmeg-uk/tokens.scss";$background-color-base: inherit;'
            // }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(json)$/,
        use: [
          {
            loader: "json-loader"
          }
        ]
      },
      {
        test: /stories\.js?$/,
        use: [
          {
            loader: "@storybook/addon-storysource/loader",
            options: {
              uglyCommentsRegex: []
            }
          }
        ],
        enforce: "pre"
      }
    ]
  }
};
