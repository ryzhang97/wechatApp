const app=getApp()
const header = {'content-type': 'application/json'}

// post
 function post(url, data) {
  return new Promise(resolve => {
    wx.request({
      url: app.apiUrl + url,
      method: 'POST',
      header,
      data,
      success(res) {
        if(res.data.code==200){
          resolve(res.data.data)
        }else{
          console.error(res.data)
        }
      },fail(err){
        console.error(err)
      }
    })
  })
}

// get
 function get(url, data) {
  return new Promise(resolve => {
    wx.request({
      url: app.apiUrl + url,
      data,
      success(res) {
        resolve(res.data.data)
      }
    })
  })
}
module.exports={
  post,
  get
}