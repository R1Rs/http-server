
const Koa = require("koa");
const logger = require("koa-logger");
const koaBody = require("koa-body");
const server = new Koa();

import ticket from "./ticketsBD"
// const ticket = {
//     id: 01, // идентификатор (уникальный в пределах системы)
//     name: "Petr", // краткое описание
//     status: "done", // boolean - сделано или нет
//     created: null // дата создания (timestamp)
// }

server.use(koaBody({
    urlencoded: true,
}));

server.use( async ctx => {
    try {
        ctx.response.body = ticket;

    } catch (error) {
        console.error("нет соединения: ", error);
        ctx.body = "not connection";
    }

    ctx.response.set({
        'Access-Control-Allow-Origin': '*',
    });
});

server.listen(3000, () => {
    console.log("соединение установлено")
})

