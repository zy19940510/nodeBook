const path = require('path')
let BookModel = require(path.resolve(__dirname, '../models/book'))
const { formatTime } = require('../util/index')

module.exports = {
  home: async ctx => {
    let books = (await BookModel.find()) || []

    await ctx.render('index', {
      books: books,
      title: '图书管理系统-首页',
      formatTime
    })
  },
  addBook: async ctx => {
    await ctx.render('add', {
      title: '图书管理系统-添加'
    })
  },
  addBookSubmit: async ctx => {
    const { title, author, price } = ctx.request.body
    await BookModel.create({
      title,
      author,
      price
    })
    ctx.redirect('/')
  },
  deleteBook: async ctx => {
    let { id } = ctx.query
    if (id) {
      await BookModel.findByIdAndRemove(id)
      ctx.redirect('/')
    }
  },
  updateBook: async ctx => {
    let { id } = ctx.query
    if (id) {
      const book = await BookModel.findById(id)
      await ctx.render('update', {
        book,
        title: '图书管理系统-修改'
      })
    }
  },
  updateBookSubmit: async ctx => {
    const { id, title, price, author } = ctx.request.body
    if (id) {
      await BookModel.findByIdAndUpdate(id, { title, price, author })
      ctx.redirect('/')
    }
  }
}
