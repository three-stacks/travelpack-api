// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const packs = sequelizeClient.define('packs', {
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  packs.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    packs.hasMany(models.groups);
    packs.hasMany(models.itineraries);
    packs.hasMany(models.messages);
    packs.hasMany(models.photos);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return packs;
};
