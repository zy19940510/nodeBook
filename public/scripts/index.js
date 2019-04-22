/**
 * 函数式编程实现节流稀释操作
 * @param {function} fn 需要节流的操作
 * @param {number} time 节流延迟的时间
 */
function thorttler(fn, time) {
  var timer
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
      }, time)
      return fn.apply(this, args)
    }
  }
}

var url = 'http://www.baidu.com'
var params = { name: 'admin' }
var fn = thorttler(function(url, params) {
  console.log(url, params)
}, 500)
fn(url, params)