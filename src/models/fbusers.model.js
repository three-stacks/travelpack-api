const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const fbusers = sequelizeClient.define('fbusers', {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  fbusers.associate = function (models) { 

  };

  return fbusers;
};
