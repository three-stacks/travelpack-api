// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const messages = sequelizeClient.define('messages', {
    text: {
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

  messages.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    messages.belongsTo(models.users);
    messages.belongsTo(models.packs);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return messages;
};
