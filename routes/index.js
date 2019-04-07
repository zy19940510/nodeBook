const combineRouters = require('koa-combine-routers')

const book = require('./book')

module.exports = combineRouters(book)