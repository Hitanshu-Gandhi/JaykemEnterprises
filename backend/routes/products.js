const express = require('express')
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/products')
const router = express.Router()

router.route('/').get(getProducts)
router.route('/').post(createProduct)
router.route('/').put(updateProduct)
router.route('/').delete(deleteProduct)

module.exports = router