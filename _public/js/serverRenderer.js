import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './Root'

function renderHTML() {
    return `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
            <title>React SSR</title>
          </head>
          <body>
            <div id="root">React Server Side Rendering</div>
          </body>
        </html>
    `;
}

module.exports = (req, res) => {
    res.send(renderHTML());
}; 