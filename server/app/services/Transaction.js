import * as TransactionRepository from '../repositories/Transaction';
import ServiceError from '../../utils/ServiceError';

export async function create(account, value, transaction) {
  if (account.balance < value) {
    throw new ServiceError('value-not-available');
  }
  const response = await TransactionRepository.create(transaction);
  return response;
}


export async function getAllAccountTransaction(account, idAccount) {
  if (!account.isActive) {
    throw new ServiceError('account-is-blocked');
  }

  const response = await TransactionRepository.getAllAccountTransaction(idAccount);
  return response;
}


export async function getTransactionByPeriod(account, idAccount, stardDate, endDate) {
  if (!account.isActive) {
    throw new ServiceError('account-is-blocked');
  }

  const formatedStartDate = new Date(stardDate);
  const formatedEndDate = new Date(endDate);

  const response = await TransactionRepository.getTransactionByPeriod(idAccount, formatedStartDate, formatedEndDate);
  return response;
}
