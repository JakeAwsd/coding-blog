const db = require('../config/connection');
const { Post, User } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

db.once('open', async () => {
  await Post.deleteMany({});
  await User.deleteMany({});

  const posts = await Post.insertMany(postData);
  const users = await User.insertMany(userData);

  console.log('Technologies seeded!');
  process.exit(0);
});
