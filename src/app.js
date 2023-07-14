const express = require('express')
require('dotenv').config()
const db = require('./utils/database')
const initModels = require('./models/initModels')
const userRoutes = require('./routes/users.routes')
const tasksRoutes = require('./routes/tasks.routes')
const categoriesRoutes = require('./routes/categories.routes')

initModels();

const app = express()
app.use(express.json())

db.sync()
  .then(() => {
    console.log("Base de datos Sincronizada!");
  })
  .catch((error) => console.log(error));

const PORT = process.env.PORT ?? 8000

app.use(userRoutes, tasksRoutes, categoriesRoutes)

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor en linea :)')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});