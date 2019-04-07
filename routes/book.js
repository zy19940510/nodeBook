const Router = require('koa-router')
const bookController = require('../controllers/bookController')

let book = new Router

book.get('/', bookController.home)
book.get('/add', bookController.addBook)
book.post('/add', bookController.addBookSubmit)
book.get('/delete', bookController.deleteBook)
book.get('/update', bookController.updateBook)
book.post('/update', bookController.updateBookSubmit)

module.exports = book