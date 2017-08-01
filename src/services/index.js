const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const packs = require('./packs/packs.service.js');
const itineraries = require('./itineraries/itineraries.service.js');
const photos = require('./photos/photos.service.js');
const groups = require('./groups/groups.service.js');

const budgets = require('./budgets/budgets.service.js');

const fbusers = require('./fbusers/fbusers.service.js');

const maps = require('./maps/maps.service.js');

module.exports = function () {
  const app = this;
  app.configure(messages);
  app.configure(users);
  app.configure(packs);
  app.configure(itineraries);
  app.configure(photos);
  app.configure(groups);
  app.configure(budgets);
  app.configure(fbusers);
  app.configure(maps);
};
