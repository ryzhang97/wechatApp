// index.js
import {getOpenid} from '../../pub'
Page({
  data: {
    login: "",
    token: "",
    openid:""
  },
  onShow() {
    this.setData({
      login: "getOpenid",
      token: 'getToken'
    })
  },
  onLogin() {
    getOpenid().then(res=>{
      this.setData({
        openid: res,
      })
      console.log(res)
    })
  },
  onGetToken() {}
})