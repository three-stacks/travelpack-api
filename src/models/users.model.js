const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lat: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    long: {
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

  users.associate = function (models) { 
    users.hasMany(models.groups);
    users.hasMany(models.itineraries);
    users.hasMany(models.messages);
    users.hasMany(models.photos);
  };

  return users;
};
