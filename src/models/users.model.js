const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
  username: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
},
  {
  timestamps: false
  })

module.exports = Users