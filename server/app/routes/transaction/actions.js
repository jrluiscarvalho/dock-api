import { CreateValidator, AllAccountValidator, TransactionByPeriodValidator } from '../../validators/Transaction';
import * as AccountService from '../../services/Account';
import * as TransactionService from '../../services/Transaction';
import errorHandler from '../../errors/ErrorHandler';
import ServiceError from '../../../utils/ServiceError';

export async function create(req, res) {
  try {
    const schema = CreateValidator();

    const model = req.body;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.getAccount(model.idAccount);

    if (!account) {
      throw new ServiceError('account-not-found');
    }

    const response = await TransactionService.create(account, model.value, model);
    await AccountService.draft(account, model.value);

    res.status(201).json(response);
  } catch (error) {
    errorHandler(error, res);
  }
}

export async function getAllAccountTransaction(req, res) {
  try {
    const schema = AllAccountValidator();

    const model = req.params;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.getAccount(model.idAccount);

    if (!account) {
      throw new ServiceError('account-not-found');
    }

    const response = await TransactionService.getAllAccountTransaction(account, model.idAccount);

    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res);
  }
}

export async function getTransactionByPeriod(req, res) {
  try {
    const schema = TransactionByPeriodValidator();

    const model = req.params;

    if (!(await schema.isValid(model))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const account = await AccountService.getAccount(model.idAccount);

    if (!account) {
      throw new ServiceError('account-not-found');
    }

    const response = await TransactionService.getTransactionByPeriod(account, model.idAccount, model.startDate, model.endDate);

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    errorHandler(err, res);
  }
}
