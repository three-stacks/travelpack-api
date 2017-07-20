const signup = require('./signup');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  const app = this; // eslint-disable-line no-unused-vars
  app.use('/signup', signup());
  // app.post('/signup', signup(app))
};
