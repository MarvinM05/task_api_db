const { Router } = require('express')

const { createCategory } = require('../controllers/categories.controllers')

const router = Router()

router.post('/api/categories', createCategory)

module.exports = router