// const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [
      populate({
        schema: {
          include: [{
            service: 'users',
            nameAd: 'user',
            parentField: 'userId',
            childField: 'id',
          }],
        },
      }),
    ],
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
