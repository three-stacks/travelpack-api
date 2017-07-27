const createService = require('feathers-sequelize');
const createModel = require('../../models/photos.model');
const hooks = require('./photos.hooks');
const filters = require('./photos.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'photos',
    Model,
    paginate,
  };


  app.use('/photos',  createService(options));


  const service = app.service('photos');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
