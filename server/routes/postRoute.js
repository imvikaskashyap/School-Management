// routes/post.routes.js

const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/post.controller');
const errorHandler = require('../middlewares/errorHandler');

module.exports = (app) => {
    app.post('/api/v1/post/create', errorHandler, createPost);
    app.get('/api/v1/posts', errorHandler, getPosts);
    app.get('/api/v1/post/:id', errorHandler, getPostById);
    app.put('/api/v1/post/:id', errorHandler, updatePost);
    app.delete('/api/v1/post/:id', errorHandler, deletePost);
};
