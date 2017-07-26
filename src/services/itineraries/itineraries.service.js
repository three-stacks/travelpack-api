const createService = require('feathers-sequelize');
const createModel = require('../../models/itineraries.model');
const hooks = require('./itineraries.hooks');
const filters = require('./itineraries.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'itineraries',
    Model,
    paginate,
  };

  app.use('/itineraries', createService(options));

  const service = app.service('itineraries');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
