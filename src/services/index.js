const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const packs = require('./packs/packs.service.js');
const itineraries = require('./itineraries/itineraries.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(messages);
  app.configure(users);
  app.configure(packs);
  app.configure(itineraries);
};
