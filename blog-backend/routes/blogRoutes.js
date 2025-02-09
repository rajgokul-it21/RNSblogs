const express = require('express');
const { getBlogs, addBlog, getBlogById } = require('../controllers/blogController');

const router = express.Router();

router.get('/blogs', getBlogs); // Get all blogs
router.post('/blogs', addBlog); // Add a new blog
router.get('/blogs/:id', getBlogById); // Get a single blog

module.exports = router;
