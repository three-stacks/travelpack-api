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


  app.use('/packs', createService(options));

  const service = app.service('packs');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
