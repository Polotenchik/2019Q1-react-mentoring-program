const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// if (process.env.NODE_ENV === 'development') {
//     const webpack = require('webpack');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');
//     const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
//     const webpackConfig = require('../webpack');
  
//     const compiler = webpack(webpackConfig);
  
//     app.use(webpackDevMiddleware(compiler));
//     app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
//     app.use(webpackHotServerMiddleware(compiler));
// } else {
//     const serverRenderer = require('./dist/js/serverRenderer.js').default;
  
//     app.use(express.static('dist'));
//     app.use(serverRenderer());
// }
  
// module.exports = app;






app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});





app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
});