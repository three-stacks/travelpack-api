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
    create: [processMessage()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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


// populate({
//       schema: {
//         include: [{
//           service: 'users',
//           nameAs: 'user',
//           parentField: 'userId',
//           childField: '_id',
//         }],
//       },
//     }),
