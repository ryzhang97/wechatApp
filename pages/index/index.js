// index.js
import {getOpenid} from '../../pub'
const app=getApp()
Page({
  data: {
    url: "",
  },
  onShow() {
    getOpenid().then(res=>{
      this.setData({
        url: app.webUrl+"login?openid="+res,
      })
      console.log(res)
    })
  },
})