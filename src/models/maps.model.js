// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const maps = sequelizeClient.define('maps', {
    lat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    long: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  maps.associate = function (models) { // eslint-disable-line no-unused-vars
    maps.belongsTo(models.users);
  };

  return maps;
};
