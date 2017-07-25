const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const groups = sequelizeClient.define('groups', {
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  groups.associate = function (models) { 
    groups.belongsTo(models.packs);
    groups.belongsTo(models.users);
  };

  return groups;
};
