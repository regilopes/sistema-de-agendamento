import { Router } from 'express';
import UserController from './app/controllers/UserController';
import Database from './database/index' //NÃO MEXER

const routes = new Router();

routes.post('/users', UserController.store)

export default routes;