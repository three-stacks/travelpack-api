// const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');
const processMessage = require('../../hooks/processMessage.js');
const commonHooks = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [
      // authenticate('jwt') 
    ],
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
            query: {
              $select: ['username', 'avatar', 'id'],
              $sort: { createdAt: -1 },
            },
          }],
        },
      }),
    ],
    find: [],
    get: [
      // commonHooks.when(
      //   hook => console.log(hook.app.passport.createJWT),
      // ),
    ],
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

