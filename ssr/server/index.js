const Loadable = require('react-loadable');
const app = require('./app');

const PORT = 3030;

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
});
