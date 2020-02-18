import { Router } from 'express';

import { router as apiRoutes } from './app/routes';

const routes = new Router();

routes.use('/', apiRoutes);

export default routes;
