import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsControllers from './controllers/PointsControllers';
import ItemControllers from './controllers/ItemControllers';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsControllers();
const itemController = new ItemControllers()

routes.get('/items', itemController.index);

routes.post('/points', upload.single('image'), pointsController.create); 


routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes; 