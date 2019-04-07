const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/express_curb',{ useNewUrlParser: true });


module.exports = mongoose