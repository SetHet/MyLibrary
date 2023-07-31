const router = require('express').Router()

const booklist = require('./booklist')

function booksRouter (app) {
  app.use('/books', router)
  router.get('/list', booklist.getBooks)
}

module.exports = booksRouter
