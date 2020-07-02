import { Router } from 'express';
import MaskController from './app/controllers/MaskController';
import ListController from './app/controllers/ListController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ ok: true }));
routes.get('/masks', MaskController.index);
routes.get('/mask/:id', ListController.index);
routes.put('/mask/:id', ListController.update);

export default routes;
