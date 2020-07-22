const router = require("koa-simple-router");
const BooksController = require("./BooksController");
const IndexController = require("./IndexController");

const booksController = new BooksController();
const indexController = new IndexController();

module.exports = (app) => {
    app.use(
        router(_ => {
            _.get('/', indexController.actionIndex);
            _.get('/api/list', booksController.actionIndex);
            _.get('/api/create', booksController.actionCreate);
        })
    );
};
