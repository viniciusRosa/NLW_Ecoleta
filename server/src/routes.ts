import express, { response } from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({ message: 'hello' });
});

export default routes;