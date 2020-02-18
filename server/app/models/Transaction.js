import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init({
      value: Sequelize.DECIMAL(10, 2),
      idAccount: Sequelize.INTEGER,
      transactionDate: Sequelize.DATE,
    }, {
      tableName: 'transaction',
      sequelize,
    });

    return this;
  }
}

export default Transaction;
