const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');

// const decode = require('jwt-decode');


module.exports = function () {
  const app = this;
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        // console.log(hooks.params.payload)
        // addPayload();
        authentication.hooks.authenticate(config.strategies)
        //   hook => {
        //   // make sure params.payload exists
        //   hook.params.payload = hook.params.payload || {}
        //   // merge in a `test` property
        //   Object.assign(hook.params.payload, {test: 'test'})
        //   console.log(hooks.params.payload, 'if it is')
        // },
      ],
      remove: [
        authentication.hooks.authenticate('jwt'),
      ],
    },
  });
};
