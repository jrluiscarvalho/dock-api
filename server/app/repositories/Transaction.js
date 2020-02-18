import { Op } from 'sequelize';
import Transaction from '../models/Transaction';

export async function create(transaction) {
  const response = await Transaction.create({
    idAccount: transaction.idAccount,
    value: transaction.value,
    transactionDate: new Date(),
  });
  return response;
}

export async function getAllAccountTransaction(idAccount) {
  const response = await Transaction.findAll({
    where: {
      idAccount,
    },
  });
  return response;
}

export async function getTransactionByPeriod(idAccount, startDate, endDate) {
  const response = await Transaction.findAll({
    where: {
      transactionDate: {
        [Op.between]: [startDate, endDate],
      },
      idAccount,
    },
  });
  return response;
}
