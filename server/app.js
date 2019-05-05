const express = require('express');
//const serverRenderer = require('./public/serverRenderer');

require('dotenv').config()

const app = express();
//const PORT = 3000;

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
   // const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
    const webpackConfig = require('../webpack');

    const compiler = webpack(webpackConfig);
  
    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler));

    //app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
   //app.use(webpackHotServerMiddleware(compiler));
} else {
   // app.use(serverRenderer());
    app.use(express.static('public'));
}

// app.listen(PORT, () => {
//     console.log(`Server listening on PORT ${PORT}`)
// });

app.use(require('../src/serverRenderer'))

module.exports = app;
