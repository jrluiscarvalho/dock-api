import * as path from 'path';

export default function swaggerConfig() {
  const projectRootPath = path.resolve(__dirname);

  const swaggerDefinition = {
    swagger: '2.0',
    info: {
      title: 'Dock Api Swagger API',
      version: '1.0.0',
      description: 'Endpoints documentation',
    },
    host: 'localhost:3000',
    basePath: '/',
  };

  const options = {
    swaggerDefinition,
    apis: [`${projectRootPath}/**/*.js`, `${projectRootPath}/swagger.js`],
  };

  return options;
}
