
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('transaction', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_account: {
      type: Sequelize.INTEGER,
      references: {
        model: 'account',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    value: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    transaction_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('transaction'),
};
