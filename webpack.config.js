module.exports = {
    entry: './public/Components/todo-app/todo-app.js',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
    module:{
      loaders: [
        { test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a valid name to reference
          query: {
            presets: ['es2015']
          }
        }
      ],
      preLoaders: [
            { test: /\.js$/, loader: "ts-loader" }
        ]
    }
};
