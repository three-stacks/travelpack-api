// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const groups = sequelizeClient.define('groups', {
    // text: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  groups.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    groups.belongsTo(models.packs);
    groups.belongsTo(models.users);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return groups;
};
