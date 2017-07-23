// Initializes the `budgets` service on path `/budgets`
const createService = require('feathers-sequelize');
const createModel = require('../../models/budgets.model');
const hooks = require('./budgets.hooks');
const filters = require('./budgets.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'budgets',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/budgets', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('budgets');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
