const router = require('express').Router();
const {
  getAllPosts,
  createPosts,
  // getPosts,
  // createPost,
} = require('../../controllers/matchup-controller');

router.route('/').get(getAllPosts);
router.route('/').post(createPosts);
// router.route('/:id').get(getPosts;
// router.route('/:id').put(createPost);

module.exports = router;
