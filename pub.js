import {post} from './api'
import {getCode,setStorage} from './wx'
async function login(){
  let code = await getCode()
  let res = await post("wx/login", {code})
  return res
}
async function getOpenid(){
  let code2Session=wx.getStorageSync('code2Session')||{}
  let openid=code2Session.openid
  if(!openid){
    code2Session = await login()
    setStorage('code2Session',code2Session)
  }
  return openid
}
module.exports = {
  login,
  getOpenid
}
