import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/store/configureStore';
import Root from './Root';
import { Body } from './containers';

function renderHTML(html, preloadedState) {
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
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
          </body>
        </html>
    `;
}

export default function serverRenderer(req, res) {
    return (req, res) => {
      const store = configureStore();
      const context = {};

      const root = (
        <Root 
          context={ context }
          location={ req.url }
          store={ store }
          Router={ StaticRouter }
        /> 
      )
      const htmlString = renderToString(root);
      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    }
};  