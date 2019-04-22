const Koa = require('koa')
const path = require('path')
const log4js = require('log4js');
const views = require('koa-views')
const bodyParser = require('koa-body')
const routers = require('./routes')
const errorHandler = require("./middleware/errorHandler");
const config = require("./config")

const app = new Koa

app.use(require('koa-static')(config.staticDir))
app.use(views(config.viewDir, {extension: 'ejs'}))
//逻辑和业务错误 http日志
log4js.configure({
  appenders: {
      cheese: {
          type: 'file',
          filename: 'logs/yd.log'
      }
  },
  categories: {
      default: {
          appenders: ['cheese'],
          level: 'error'
      }
  }
});
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
app.use(bodyParser())
app.use(routers())

app.listen(config.port, () => {
    console.log(`服务已启动🍺🍞`)
})