// const { authenticate } = require('feathers-authentication').hooks;
// const { populate } = require('feathers-hooks-common');
const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [
      // authenticate('jwt') 
    ],
    find: [
      hooks.queryWithCurrentUser({ idField: 'id', as: 'sentBy' })
    ],
    get: [],
    create: [],
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
