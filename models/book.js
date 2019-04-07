const mongoose = require('./db')
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  createTime: {
    type: Date,
    default: Date.now
  }
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book
