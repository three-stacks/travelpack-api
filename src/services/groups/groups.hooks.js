// const { authenticate } = require('feathers-authentication').hooks;
// const { populate } = require('feathers-hooks-common');
const commonHooks = require('feathers-hooks-common');
const hooks = require('feathers-authentication-hooks');
const getUserData = require('../../hooks/getUserData.js');
const getPackData = require('../../hooks/getPackData.js');

module.exports = {
  before: {
    all: [
      // authenticate('jwt') 
    ],
    find: [
      // hooks.queryWithCurrentUser({ idField: 'id', as: 'sentBy' })
      // commonHooks.when(
      //   hook => console.log(hook),
      // ),
    ],
    get: [],
    create: [getUserData()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [
      getPackData()
      // commonHooks.when(
        // return hooks.
        // return (hook)  => console.log(hook.result.data[0].packId),
        //   hook.app.service('packs').find(hook.result.data[0].packId).then(val=> {  
        // }),
      // ),
    ],
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
