import express from 'express';

import config from './config';
import router from './routes';

const app = express();

const server = app.listen(config.port, () => {
    console.log('Success');
});

app.use(router);
