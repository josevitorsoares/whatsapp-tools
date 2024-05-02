import { API_PORT } from './configs/env/env';
import { app } from './src/app';

void app
  .listen({
    port: API_PORT,
  })
  .then(() => {
    console.info('#####################################');
    console.info('#       🚀 Server listening        #');
    console.info('#####################################');
  });
