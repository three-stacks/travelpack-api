const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const packs = sequelizeClient.define('packs', {
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  packs.associate = function (models) { 
    packs.hasMany(models.groups);
    packs.hasMany(models.itineraries);
    packs.hasMany(models.messages);
    packs.hasMany(models.photos);
    packs.hasMany(models.budgets);
  };

  return packs;
};
