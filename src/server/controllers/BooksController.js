const Controller = require("./Controller");
// const Books = require("@models/Books");
class BooksController extends Controller {
    constructor(){
        super();
    }
    async actionIndex(ctx, next){
        // const books = new Books();
        // const data = await books.getData();
        // ctx.body = await ctx.render('list',{
        //     data
        // })
        // ctx.body = await ctx.render('../../web/views/books/pages/list.html')
        ctx.body = {
            data: '这是图书列表'
        }
    }
    async actionCreate(ctx){
        // const books = new Books();
        // const data = await books.getData();
        // ctx.body = await ctx.render('../../web/views/books/pages/create.html')
        ctx.body = {
            data: '这是创建图书'
        }
    }
}

module.exports = BooksController;