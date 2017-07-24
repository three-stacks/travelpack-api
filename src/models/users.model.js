// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
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
      allowNull: false,
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

  users.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here

    users.hasMany(models.groups);
    users.hasMany(models.itineraries);
    users.hasMany(models.messages);
    users.hasMany(models.photos);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
