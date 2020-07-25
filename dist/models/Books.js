"use strict";

const axios = require("axios");

class Books {
  getData() {
    // return axios.post('https://crm.g-home.cn/jrest/goldenhomecrm/customer/getCustomerOtherInfo')
    return [{
      "id": 1,
      "name": "你不知道的javascript 上册"
    }, {
      "id": 2,
      "name": "你不知道的javascript 中册"
    }, {
      "id": 3,
      "name": "你不知道的javascript 下册"
    }, {
      "id": 4,
      "name": "JavaScripts高级语言设计"
    }, {
      "id": 5,
      "name": "css世界"
    }];
  }

}

module.exports = Books;