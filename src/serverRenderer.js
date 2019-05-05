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
            <script src="bundle.js"></script>
          </body>
        </html>
    `;
}

module.exports = (req, res) => {
    res.send(renderHTML());
}; 