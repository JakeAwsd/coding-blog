const router = require('express').Router();
const {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
} = require('../../controllers/post-controller');

router.route('/').post(createPost);
router.route('/:id').get(getAllPosts);
router.route('/:id').put(getPost);
router.route('/:id').delete(deletePost);

module.exports = router;
