const app = require('./app');
const Loadable = require('react-loadable');
const PORT = 3030;

Loadable.preloadAll().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`)
    });    
});