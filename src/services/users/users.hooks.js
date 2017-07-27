const { authenticate } = require('feathers-authentication').hooks;
const { hashPassword } = require('feathers-authentication-local').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');
const commonHooks = require('feathers-hooks-common');
const addAvatar = require('../../hooks/addAvatar.js');

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id',
  }),
];

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      addAvatar(),
      hashPassword({ passwordField: 'password' })],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [
      commonHooks.when(hook => hook.params.provider, commonHooks.discard('password'))],
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
