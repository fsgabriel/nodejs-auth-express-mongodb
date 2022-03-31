import express from 'express';
import morgan from 'morgan';

import Router from './router/router.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/app/v1/user', Router);

export default app;
