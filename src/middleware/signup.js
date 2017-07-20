module.exports = function (options = {}) {
  return function signup(req, res, next) {
    // console.log('signup middleware is running');
    next();
  };
};
