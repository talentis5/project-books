const Rize = require('rize');
const rize = new Rize();
rize
  .goto('http://192.168.70.53:8081/api/list')
//   .type('input.header-search-input', 'node')
//   .press('Enter')
//   .waitForNavigation()
  .assertSee('0 -- 你不知道的javascript 上册')
  .end()