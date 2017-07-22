// const { authenticate } = require('feathers-authentication').hooks;
// const { populate } = require('feathers-hooks-common');
// const hooks = require('feathers-authentication-hooks');
const getUserData = require('../../hooks/getUserData.js');

module.exports = {
  before: {
    all: [
      // authenticate('jwt') 
    ],
    find: [
      // hooks.queryWithCurrentUser({ idField: 'id', as: 'sentBy' })
    ],
    get: [],
    create: [ getUserData() ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
