const createService = require('feathers-sequelize');
const createModel = require('../../models/fbusers.model');
const hooks = require('./fbusers.hooks');
const filters = require('./fbusers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'fbusers',
    Model,
    paginate
  };

  app.use('/fbusers', createService(options));

  const service = app.service('fbusers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
