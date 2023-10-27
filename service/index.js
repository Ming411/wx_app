const BASE_URL = 'http://codercba.com:9002'
class XMRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        data: params,
        method: method,
        success: (result) => {
          resolve(result.data)
        },
        fail: reject,
      })
    })
  }
  get(url, params) {
    return this.request(url, 'GET', params)
  }
  POST(url, data) {
    return this.request(url, 'POST', data)
  }
}
const xmRequest = new XMRequest()
export default xmRequest