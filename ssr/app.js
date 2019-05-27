// const express = require('express');
// const path = require('path');
// const serverRenderer = require('./public/serverRenderer');
// require('dotenv').config()

// const app = express();
// const PORT = 3000;

// const env = process.env.NODE_ENV;

// if (env === 'development') {
//     const webpack = require('webpack');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');
//    // const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
//     const webpackConfig = require('./webpack.my.config');

//     const compiler = webpack(webpackConfig);

//     app.use(webpackDevMiddleware(compiler));
//     app.use(webpackHotMiddleware(compiler));

//     //app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
//    //app.use(webpackHotServerMiddleware(compiler));
// } else {
//     app.use(serverRenderer());

// }

// app.listen(PORT, () => {
//     console.log(`Server listening on PORT ${PORT}`)
// });
