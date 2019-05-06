import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import { Body } from './containers';

function renderHTML(html) {
    return `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
            <title>React SSR</title>
            ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}          
          </head>
          <body>
            <div id="root">${html}</div>
          </body>
        </html>
    `;
}

export default function serverRenderer(req, res) {
    return (req, res) => {
      const context = {};

      const root = (
        <Root 
          context={ context }
          location={ req.url }
          Router={ StaticRouter }
        /> 
      )
      const htmlString = renderToString(root);

      res.send(renderHTML(htmlString));
    }
};  