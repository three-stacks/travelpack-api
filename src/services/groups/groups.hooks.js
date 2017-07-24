// const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');
// const commonHooks = require('feathers-hooks-common');
const getUserData = require('../../hooks/getUserData.js');


// const userPackSchema = {
//   include: [{
//     service: 'packs',
//     nameAs: 'pack',
//     parentField: 'packId',
//     childField: 'id',
//   },
//   {
//     service: 'users',
//     nameAs: 'user',
//     parentField: 'userId',
//     childField: 'id',
//   },
// }];

module.exports = {
  before: {
    all: [
      // authenticate('jwt') 
    ],
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
            query: {
              $select: ['username', 'avatar', 'id'],
            },
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
