const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
const oauth2 = require('feathers-authentication-oauth2');
const FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function () {
  const app = this;
  const config = app.get('authentication');

  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  app.configure(oauth2({
    name: 'facebook',
    Strategy: FacebookStrategy,
    apiUrl: 'https://graph.facebook.com/v2.3/',
    clientID: 'process.env.FACEBOOK_CLIENT_ID',
    clientSecret: 'process.env.FACEBOOK_SECRET',
    callbackURL: 'process.env.URL/process.env.PORT/auth/facebook/callback',
    entity: 'fbuser',
    service: 'fbusers',
    scope: ['public_profile', 'email'],
  }));

  app.service('auth').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
        (hook) => { 
          // console.log(hook.app.passport.Authenticator)
          hook.params.payload = {
            userId: hook.params.user.id,
            username: hook.params.user.username,
            avatar: hook.params.user.avatar,
            email: hook.params.user.email,
          };
        },
      ],
      remove: [
        // authentication.hooks.authenticate('jwt'),
      ],
    },
  });
};
