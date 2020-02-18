import Sequelize, { Model } from 'sequelize';

class Person extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      cpf: Sequelize.STRING,
      birthDate: Sequelize.DATE,
    }, {
      tableName: 'person',
      sequelize,
    });

    return this;
  }
}

export default Person;
