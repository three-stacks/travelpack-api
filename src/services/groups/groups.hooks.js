// const { authenticate } = require('feathers-authentication').hooks;
// const commonHooks = require('feathers-hooks-common');
const { populate } = require('feathers-hooks-common');
const getUserData = require('../../hooks/getUserData.js');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [getUserData()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [
      populate({
        schema: {
          include: [{
            service: 'packs',
            nameAs: 'pack',
            parentField: 'packId',
            childField: 'id',
            query: {
              $select: ['id', 'name', 'url'],
              $sort: { createdAt: -1 },
            },
            paginate: false,
          },
          {
            service: 'users',
            nameAs: 'user',
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
