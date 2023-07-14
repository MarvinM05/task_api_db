const { Router } = require('express')
const { createTask, updateTask, deleteTask } = require('../controllers/tasks.controllers')

const router = Router()

router.post('/api/tasks', createTask)
router.put('/api/tasks/:id', updateTask)
router.delete('/api/tasks/:id', deleteTask)

module.exports = router