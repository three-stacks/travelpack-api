// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const itineraries = sequelizeClient.define('itineraries', {
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    activity: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    time: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    like: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    unlike: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  itineraries.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    itineraries.belongsTo(models.packs);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return itineraries;
};
