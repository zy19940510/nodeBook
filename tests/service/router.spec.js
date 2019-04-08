describe('Node接口测试', function() {
  it('test接口测试', function(done) {
    fetch('http://localhost:8000/', function(res) {
      if (res.body.data == 'Hello 京程一灯') {
        done()
      } else {
        console.log(res.body)

        done(new Error('接口数据异常'))
      }
    })
  })
})
