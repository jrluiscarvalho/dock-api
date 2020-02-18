
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('account', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_person: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    balance: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    daily_limit: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    account_type: {
      type: Sequelize.INTEGER,
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

  down: (queryInterface) => queryInterface.dropTable('account'),
};
