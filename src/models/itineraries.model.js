const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const itineraries = sequelizeClient.define('itineraries', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    date: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    time: {
      type: Sequelize.INTEGER,
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

  itineraries.associate = function (models) { 
    itineraries.belongsTo(models.packs);
  };
  return itineraries;
};
