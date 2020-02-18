import * as express from 'express';

import store from './actions';

export const router = express.Router();

router.post('/', store);
