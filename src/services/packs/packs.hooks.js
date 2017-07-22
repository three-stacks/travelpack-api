// const { authenticate } = require('feathers-authentication').hooks;
// const hooks = require('feathers-authentication-hooks');
const addToGroups = require('../../hooks/addToGroups.js');

module.exports = {
  before: {
    all: [
      // authenticate('jwt') 
    ],
    find: [
      // hooks.queryWithCurrentUser({ idField: 'id', as: 'sentBy' })
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
    create: [addToGroups()],
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
