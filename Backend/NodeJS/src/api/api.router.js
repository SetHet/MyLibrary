// Router base de la API
const rootRouter = require('express').Router()

// Rutas
const test = require('./test/test')
const booksRouter = require('./books/books.router')

// Asignar rutas
function apiRouter (app) {
  app.use('/api', rootRouter)
  rootRouter.use(test)
  booksRouter(rootRouter)
}

// Exportar funcion para asignar rutas
module.exports = apiRouter
