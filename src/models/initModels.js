const Users = require('./users.model')
const Tasks = require('./tasks.models')
const Categories = require('./categories.model')

const initModels = () => {
  Tasks.belongsTo(Categories, { foreignKey: 'categoryId' })
  Categories.hasMany(Tasks, { foreignKey: 'categoryId' })
  
  Tasks.belongsTo(Users, { foreignKey: 'userId' })
  Users.hasMany(Tasks, {foreignKey: 'userId'})
}

module.exports = initModels