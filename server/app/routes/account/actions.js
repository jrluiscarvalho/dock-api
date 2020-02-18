import {
  AccountValidator, updateBalanceValidator, BalanceValidator, ActiveValidator,
} from '../../validators/Account';
import errorHandler from '../../errors/ErrorHandler';
import ServiceError from '../../../utils/ServiceError';

import * as AccountService from '../../services/Account';

export async function store(req, res) {
  try {
    const schema = AccountValidator();

    const model = req.body;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.create(model);

    return res.status(201).json(account);
  } catch (error) {
    errorHandler(error, res);
  }
}

export async function getBalance(req, res) {
  try {
    const schema = BalanceValidator();

    const model = req.params;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.getAccount(model.idAccount);

    if (!account) {
      throw new ServiceError('account-not-found');
    }

    res.status(200).json({ balance: parseFloat(account.balance) });
  } catch (error) {
    errorHandler(error, res);
  }
}

export async function draft(req, res) {
  try {
    const schema = updateBalanceValidator();

    const model = req.body;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.getAccount(model.idAccount);

    if (!account) {
      throw new ServiceError('account-not-found');
    }

    const newAccount = await AccountService.draft(account, model.value);

    res.status(200).json({ balance: parseFloat(newAccount.balance) });
  } catch (error) {
    errorHandler(error, res);
  }
}

export async function deposit(req, res) {
  try {
    const schema = updateBalanceValidator();

    const model = req.body;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.getAccount(model.idAccount);

    if (!account) {
      throw new ServiceError('account-not-found');
    }

    const newAccount = await AccountService.deposit(account, model.value);

    res.status(200).json({ balance: parseFloat(newAccount.balance) });
  } catch (error) {
    errorHandler(error, res);
  }
}

export async function updateStatus(req, res) {
  try {
    const schema = ActiveValidator();

    const model = req.body;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.getAccount(model.idAccount);

    if (!account) {
      throw new ServiceError('account-not-found');
    }

    await AccountService.updateStatus(account, model.isActive);

    res.status(204).send();
  } catch (error) {
    errorHandler(error, res);
  }
}
