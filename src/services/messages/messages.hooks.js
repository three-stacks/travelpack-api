// const { authenticate } = require('feathers-authentication').hooks;
// const { populate } = require('feathers-hooks-common');
// const postmessage = require('../../')

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
