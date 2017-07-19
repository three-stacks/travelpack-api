// Initializes the `packs` service on path `/packs`
const createService = require('feathers-sequelize');
const createModel = require('../../models/packs.model');
const hooks = require('./packs.hooks');
const filters = require('./packs.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'packs',
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/packs', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('packs');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
