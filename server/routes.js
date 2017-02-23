import express from 'express';

import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

// BASIC ROUTES
routes.get('/', basicController.get);


// USER ROUTES
routes.post('/signup', userController.post);

// POST ROUTES
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

// COMMENT ROUTES
routes.post('/comment', commentController.post);

export default routes;