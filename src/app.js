import express from 'express';

import Router from './router.js';

const app = express();

app.use('/', Router);

export default app;
