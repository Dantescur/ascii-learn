const path = require('path');

module.exports = {
  entry: {
    main: './src/script.js',
    practice: './src/practice.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|mjs)$/,
        use: 'babel-loader',
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: require.resolve("gsap"),
        loader: "expose-loader",
        options: {
          exposes: ["gsap"],
        },
      },
    ],
  },
  plugins: [],
};
