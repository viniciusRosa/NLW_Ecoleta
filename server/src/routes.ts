import express from 'express';
import PointsControllers from './controllers/PointsControllers';
import ItemControllers from './controllers/ItemControllers';

const routes = express.Router();
const pointsController = new PointsControllers();
const itemController = new ItemControllers()

routes.get('/items', itemController.index);

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)


export default routes;