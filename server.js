const Koa = require("koa");
const logger = require("koa-logger");
const koaBody = require("koa-body");
const server = new Koa();
require("./DataBaseTickets")

server.use(koaBody({
    urlencoded: true,
}));

server.use( async ctx => {
    ctx.response.set({
        'Access-Control-Allow-Origin': '*',
    });
    const method = ctx.request.querystring;
 
    switch (method) { 
        case "method=allTickets":
            ctx.response.body = tickets;
            return;
        case "ticketById":
            ctx.response.body = "zapros id";
            return;
        case "method=createTicket":
            tickets.push({
                name: "it's work!"
            })
            ctx.response.body = tickets;
            return;
        default:
            ctx.response.status = 404;
            return;
    }   
});

server.listen(3000, () => {
    console.log("соединение установлено")
})

