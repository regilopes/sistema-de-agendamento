import { Router } from "express";
import { route } from "express/lib/router";

const routes = new Router();

routes.get('/', (req, res) => {
   return res.json({message: 'Okay'})
})

export default routes;