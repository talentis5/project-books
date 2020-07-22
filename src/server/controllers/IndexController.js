const Controller = require("./Controller");
class IndexController extends Controller {
    constructor() {
        super();
    }
    async actionIndex(ctx, next) {
        ctx.body = {
            data: '这是后端的数据'
        }
        // ctx.body = await ctx.render('index', {
        //     data: '这是后端的数据'
        // })
    }
}

module.exports = IndexController;