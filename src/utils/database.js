const { Sequelize } = require('sequelize')

const db = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
});

module.exports = db

//dpg-ciolusunqqlfegddh9bg-a.oregon-postgres.render.com