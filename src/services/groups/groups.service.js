// Initializes the `groups` service on path `/groups`
const createService = require('feathers-sequelize');
const createModel = require('../../models/groups.model');
const hooks = require('./groups.hooks');
const filters = require('./groups.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'groups',
    Model,
    paginate,
  };

  app.use('/groups', createService(options));

  const service = app.service('groups');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
