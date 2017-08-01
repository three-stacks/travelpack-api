const signup = require('./signup');

module.exports = function () {
  const app = this; 
  app.use('/signup', signup());
};
