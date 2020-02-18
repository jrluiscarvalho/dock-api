import Sequelize, { Model } from 'sequelize';

class Account extends Model {
  static init(sequelize) {
    super.init({
      balance: Sequelize.DECIMAL(10, 2),
      idPerson: Sequelize.INTEGER,
      dailyLimit: Sequelize.DECIMAL(10, 2),
      isActive: Sequelize.BOOLEAN,
      accountType: Sequelize.INTEGER,
    }, {
      tableName: 'account',
      sequelize,
    });

    return this;
  }
}

export default Account;
