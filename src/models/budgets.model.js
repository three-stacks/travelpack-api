// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const budgets = sequelizeClient.define('budgets', {
    event: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
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

  budgets.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    budgets.belongsTo(models.packs);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return budgets;
};
