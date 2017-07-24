const signup = require('./signup');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  const app = this; 
  app.use('/signup', signup());
};
