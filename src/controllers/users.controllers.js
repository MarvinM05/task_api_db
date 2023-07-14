const Categories = require('../models/categories.model')
const Tasks = require('../models/tasks.models')
const Users = require('../models/users.model')

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body
    await Users.create({ email, password })
    res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

const getUserTasks = async (req, res) => {
  try {
    const { id } = req.params
    const userTasks = await Users.findByPk(id, {
      attributes: {
        exclude: ['password']
      },
      include: {
        model: Tasks,
        attributes: ['title', 'description', 'completed'],
        include: {
          model: Categories,
          attributes: ['name', 'description']
        }
      }
    })
    res.json(userTasks)
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createUser, getUserTasks
}