const router = require('express').Router();
<<<<<<< HEAD
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
=======
const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
>>>>>>> e936af837b620d2e4579857c06e50e4082032fb0

module.exports = router;
