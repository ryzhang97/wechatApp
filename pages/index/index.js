// index.js
Page({
  data:{
    login:"",
    token:""
  },
  onShow(){
    this.setData({login:"login",token:'getToken'})
  },
  onLogin(){
    wx.login({
      success (res) {
        if (res.code) {
          wx.request({
            url: 'http://127.0.0.1:8000/wx/login',
            method:'POST',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  onGetToken(){
    wx.request({
      url: 'http://127.0.0.1:8000/wx/getAccess',
      data: {}
    })
  }
})
