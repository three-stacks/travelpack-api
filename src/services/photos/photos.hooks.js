// const { populate } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
      // hook => hooks.params.provider 
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      // populate({
      //   schema: {
      //     include: [{
      //       service: 'users',
      //       // nameAs: 'user',
      //       // parentField: 'userId',
      //       // childField: '_id'
      //     }]
      //   }
      // })
    ],
    // find: [],
    // get: function(params){

    // },
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
