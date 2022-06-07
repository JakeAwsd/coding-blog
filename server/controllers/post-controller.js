const { Post } = require('../models');

module.exports = {
  async createPost({ body }, res) {
    const post = await Post.create(body);

    if (!post) {
      return res.status(400).json({ message: 'Unable to create post' });
    }

    res.status(200).json(post);
  },
  async getAllPosts(req, res) {
    const allPosts = await Post.find({});

    if (!allPosts) {
      return res.status(400).json({ message: 'No posts found' });
    }

    res.status(200).json(allPosts);
  },
  async getPost({ params }, res) {
    const post = await Post.findOne({ _id: params.id });

    if (!post) {
      return res.status(400).json({ message: 'No post found by that id' });
    }

    res.status(200).json(post);
  },
  async deletePost({ params }, res) {
    const post = await Post.deleteOne({ _id: params.id });

    if (!post) {
      return res.status(400).json({ message: 'No post found by that id' });
    }

    res.status(200).json(post);
  }
};
