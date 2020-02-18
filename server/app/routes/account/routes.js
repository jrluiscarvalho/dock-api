import * as express from 'express';

import {
  store,
  deposit,
  draft,
  getBalance,
  updateStatus,
} from './actions';

export const router = express.Router();

router.post('/', store);
router.get('/balance/:idAccount', getBalance);
router.put('/deposit', deposit);
router.put('/draft', draft);
router.put('/status', updateStatus);
