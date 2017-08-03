const Koa = require('koa');

// 使用router
const Router = require('koa-router');
const Boom = require('boom');
const app = new Koa();
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods({
    throw: true,
    notImplemented: () => new Boom.notImplemented(),
    methodNotAllowed: () => new Boom.methodNotAllowed()
}));

// 使用bodyparser 解析get,post的参数
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

router.get('/api/kitty', async (ctx, next) => {
    ctx.body = {name:'kitty', age:7};
});

// log error
app.on('error', (err, ctx) => {
    console.log('server error', err, ctx);
}
);

app.listen(7777);