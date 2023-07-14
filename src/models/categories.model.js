const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Categories = db.define('categories', {
  name: {
    type: DataTypes.STRING(35),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = Categories