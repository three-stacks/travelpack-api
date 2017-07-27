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
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });
  budgets.associate = function (models) { 
    budgets.belongsTo(models.packs);
  };
  return budgets;
};
