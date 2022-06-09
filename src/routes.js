import { Router } from 'express';
import User from './app/models/User';
import Database from './database/index'

const routes = new Router();

routes.get('/', async (req, res) => {
   const user = await User.create({
      name: 'Reginaldo',
      email: 'reginaldo@email.com',
      password_hash: '12345',
   });
   return res.json(user)
})

export default routes;