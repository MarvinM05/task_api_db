const Tasks = require('../models/tasks.models')

const createTask = async (req, res) => {
  try {
    const { title, description, userId, categoryId } = req.body
    await Tasks.create({ title, description, userId, categoryId })
    res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { completed } = req.body
    await Tasks.update({ completed }, {
      where: { id }
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    await Tasks.destroy({
      where: { id }
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createTask, updateTask, deleteTask
}