var config = {
   entry: './assets/js/main.js',

   output: {
      // path:'/public/js/',
      // filename: 'main.js',
      filename: './public/js/main.js'
   },

   devServer: {
      inline: true,
      port: 4000
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
