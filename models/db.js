const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/book_curd',{ useNewUrlParser: true });


module.exports = mongoose