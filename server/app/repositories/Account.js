import Account from '../models/Account';

export async function create(account) {
  const response = await Account.create({
    idPerson: account.idPerson,
    dailyLimit: account.dailyLimit,
    balance: account.balance,
    isActive: account.isActive,
    accountType: account.accountType,
    createdDate: new Date(),
  });
  return response;
}

export async function getAccount(id) {
  const response = await Account.findOne({
    where: {
      id,
    },
  });
  return response;
}

export async function updateBalance(account, value) {
  const response = await account.update({
    balance: value,
  });

  return response;
}

export async function updateStatus(
  account,
  isActive,
) {
  const newAccount = await account.update({
    isActive,
  });
  return newAccount;
}
