import * as express from 'express';

import {
  create,
  getAllAccountTransaction,
  getTransactionByPeriod,
} from './actions';

export const router = express.Router();

router.post('/', create);
router.get('/:idAccount', getAllAccountTransaction);
router.get('/:idAccount/:startDate/:endDate', getTransactionByPeriod);
