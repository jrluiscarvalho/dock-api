import Sequelize from 'sequelize';

import Person from '../app/models/Person';
import Account from '../app/models/Account';
import Transaction from '../app/models/Transaction';

import databaseConfig from '../config/database';

const models = [Person, Account, Transaction];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
