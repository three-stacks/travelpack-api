// Initializes the `photos` service on path `/photos`
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


  // Initialize our service with any options it requires
  app.use('/photos',  createService(options));

  // app.get('/photos', function(req, sed){
  //   .find({ query: url:  "somethingr" })
  // })

  // app.use('/photos', {
  //   create(data, params) {
  //     console.log(data, params, 'data')
  //     return Promise.resolve(data);
  //   }
  // });


  // Get our initialized service so that we can register hooks and filters
  const service = app.service('photos');
  // service.create({
  //   name,
  // });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
