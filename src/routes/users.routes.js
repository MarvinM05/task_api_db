const { Router } = require('express')

const { createUser, getUserTasks } = require('../controllers/users.controllers')

const router = Router()

router.post("/api/users", createUser);
router.get('/api/users/:id', getUserTasks)

module.exports = router
