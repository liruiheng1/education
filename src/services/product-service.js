/**
 * product-service.js Created by SmallFour on 2019/10/22/14:16
 */

// 第二个文件：M层

/*
* M : 数据
* V： 视图
* C： 业务逻辑层
* */

import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
  Login(n) {
    return _http.request({
      url: '/apis/user/pc/api/user/login/password',
      type: "post",
      data: {
        clientId: n.clientId,
        ip: n.ip,
        mobile: n.mobile,
        password: n.password
      }
    })
  }
}

export default Product
