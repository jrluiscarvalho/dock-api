import * as AccountRepository from '../repositories/Account';
import ServiceError from '../../utils/ServiceError';

export async function create(account) {
  const response = await AccountRepository.create(account);
  return response;
}

export async function getAccount(idAccount) {
  const response = await AccountRepository.getAccount(idAccount);
  return response;
}

export async function deposit(account, value) {
  if (!account.isActive) {
    throw new ServiceError('account-is-blocked');
  }

  const actualBalance = account.balance;
  const newBalance = value + parseFloat(actualBalance);
  const response = await AccountRepository.updateBalance(account, newBalance);
  return response;
}

export async function draft(account, value) {
  if (!account.isActive) {
    throw new ServiceError('account-is-blocked');
  }

  if (account && account.balance < value) {
    throw new ServiceError('value-not-available');
  }
  if (account && value > account.dailyLimit) {
    throw new ServiceError('operation-not-available');
  }

  const actualBalance = account.balance;
  const newBalance = parseFloat(actualBalance) - value;
  const response = await AccountRepository.updateBalance(account, newBalance);
  return response;
}

export async function updateStatus(account, isActive) {
  const response = await AccountRepository.updateStatus(account, isActive);
  return response;
}
