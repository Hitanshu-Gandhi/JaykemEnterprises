const express = require('express')
const { getBlogs, createBlogs, updateBlogs, deleteBlogs, getBlogsByID } = require('../controllers/blogs')
const router = express.Router()

router.route('/').get(getBlogs)
router.route('/').post(createBlogs)
router.route('/').put(updateBlogs)
router.route('/').delete(deleteBlogs)
router.route('/:id').get(getBlogsByID)

module.exports = router