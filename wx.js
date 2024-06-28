function getCode() {
  return new Promise(resolve => {
    wx.login({
      success(res) {
        if (res.code) {
          resolve(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
      fail(err) {
        console.log('登录失败！' + res.errMsg)
      }
    })
  })
}
function setStorage(key,data){
  wx.setStorage({key,data})
}
module.exports = {
  getCode,
  setStorage
}