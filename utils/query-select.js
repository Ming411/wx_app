export default function querySelect(selector) {
  // console.log('-----')
  return new Promise(resolve => {
    const query = wx.createSelectorQuery()
    // 通过类名获取元素
    query.select(selector).boundingClientRect()
    query.exec((res) => {
      resolve(res)
    })
  })
}