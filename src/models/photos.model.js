const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const photos = sequelizeClient.define('photos', {
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  photos.associate = function (models) { 
    photos.belongsTo(models.users);
    photos.belongsTo(models.packs);
  };

  return photos;
};
