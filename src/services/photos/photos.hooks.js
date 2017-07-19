// const { populate } = require('feathers-hooks-common');
// const { limit } = require('feathers-hooks-)
const postmessage = require('../../hooks/postmessage.js');

module.exports = {
  before: {
    all: [
    ],
    find: [ postmessage() ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [ postmessage() ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [
      postmessage()
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
