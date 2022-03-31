import express from 'express';

import { getUser } from '../controller/authController.js';

const Router = express.Router();

Router.route('/').get(getUser);

export default Router;
