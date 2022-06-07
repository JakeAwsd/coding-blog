const router = require('express').Router();
const {
  createPost,
  getAllPosts,
  getPost,
  deletePost,s
} = require('../../controllers/post-controller');
s
router.route('/').post(createPost);
router.route('/:id').get(getAllPosts);
router.route('/:id').put(getPost);
router.route('/:id').delete(deletePost);

module.exports = router;
