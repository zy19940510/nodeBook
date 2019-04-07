const Koa = require('koa')
const path = require('path')
const routers = require('./routes')
const views = require('koa-views')
const bodyParser = require('koa-body')
const app = new Koa

app.use(views(path.join(__dirname, 'views'), {extension: 'ejs'}))
app.use(require('koa-static')(__dirname + '/public'))
app.use(bodyParser())
app.use(routers())

app.listen(`8000`, () => {
    console.log(`listening at 8000`)
})