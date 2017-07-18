// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const photos = sequelizeClient.define('photos', {
    url: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  photos.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    photos.belongsTo(models.users);
    photos.belongsTo(models.packs);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return photos;
};
