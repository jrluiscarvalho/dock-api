import express from 'express';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import routes from './routes';
import sentryConfig from './config/sentry';

import './database';
import swaggerConfig from './swaggerConfig';

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerUi = require('swagger-ui-express');

const swaggerSpec = swaggerJSDoc(swaggerConfig());

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.get('/swagger.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
