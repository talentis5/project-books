"use strict";

const Controller = require("./Controller");

class IndexController extends Controller {
  constructor() {
    super();
  }

  async actionIndex(ctx, next) {
    ctx.body = {
      data: '这是后端的数据'
    }; // ctx.body = await ctx.render('../../web/views/index/pages/index.html');
  }

}

module.exports = IndexController;