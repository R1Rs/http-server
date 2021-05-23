// const http = require("http");
const Koa = require("koa");
// const logger = require("koa-morgan");
// const koaBody = require("koa-body");
const server = new Koa();

server.use(ctx => {
    ctx.response.body = "na na na";
    console.log("ctx.request.query");
    ctx.response.set({
        'Access-Control-Allow-Origin': '*',
    })
}).listen(3000)
