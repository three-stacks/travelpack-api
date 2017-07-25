const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
// const decode = require('jwt-decode');


module.exports = function () {
  const app = this;
  const config = app.get('authentication');

  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
        (hook) => { 
          hook.params.payload = {
            userId: hook.params.user.id,
            username: hook.params.user.username,
            avatar: hook.params.user.avatar,
            email: hook.params.user.email,
          };
          // console.log(hook.params.payload, 'in auth'); 
        },
      ],
      remove: [
        authentication.hooks.authenticate('jwt'),
      ],
    },
  });
};
