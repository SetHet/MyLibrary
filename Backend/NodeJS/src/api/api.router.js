// Router base de la API
const rootRouter = require('express').Router()

// Rutas
const test = require('./test/test')

// Asignar rutas
function apiRouter (app) {
  app.use('/api', rootRouter)
  rootRouter.use(test)
}

// Exportar funcion para asignar rutas
module.exports = apiRouter
