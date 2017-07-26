const createService = require('feathers-sequelize');
const createModel = require('../../models/messages.model');
const hooks = require('./messages.hooks');
const filters = require('./messages.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'messages',
    Model,
    paginate,
  };


  app.use('/messages', createService(options));

  const service = app.service('messages');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
