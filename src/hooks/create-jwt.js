// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) {
  return function createJwt (hook) {
    console.log(hook.app.passport.createJWT);
    return Promise.resolve(hook);
  };
};
