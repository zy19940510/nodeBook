const Rize = require('rize')
const rize = new Rize()
rize
  .goto('http://localhost:8000/')
  .assertTitle('图书管理系统-首页')
  .end()
