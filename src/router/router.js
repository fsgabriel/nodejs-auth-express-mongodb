import express from 'express';
import { register } from '../controller/authController.js';

const Router = express.Router();

Router.route('/register').post(register);

export default Router;
