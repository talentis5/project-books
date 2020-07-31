"use strict";

const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@root': __dirname,
  '@models': __dirname + '/models',
  '@controllers': __dirname + '/controllers'
});

const Koa = require("koa");

const render = require('koa-swig');

const server = require("koa-static");

const co = require("co");

const errorHandler = require("./middlewares/errorHandler"); // const { historyApiFallback } = require('koa2-connect-history-api-fallback');


const log4js = require("log4js");

log4js.configure({
  appenders: {
    cheese: {
      type: "file",
      filename: "logs/yd.log"
    }
  },
  categories: {
    default: {
      appenders: ["cheese"],
      level: "error"
    }
  }
});
const logger = log4js.getLogger("cheese");

const {
  port,
  viewDir,
  memoryFlag,
  staticDir
} = require('./config/index.js');

const app = new Koa();
console.log(viewDir);
app.use(server(staticDir));
app.context.render = co.wrap(render({
  root: viewDir,
  autoescape: true,
  cache: memoryFlag,
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));
errorHandler.error(app, logger); // app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));

require("./controllers")(app);

app.listen(port, () => {
  console.log("服务启动成功！！", port);
});