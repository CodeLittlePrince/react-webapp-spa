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

/* 首页数据 */

// 推荐制品周边数据
const recoData = require('./Home/reco.js');
router.get('/api/home/reco', async(ctx, next) => {
    ctx.body = recoData;
});
// 猜你喜欢数据
const guessData = require('./Home/guessInterest.js');
router.get('/api/home/guessInterest/:city/:page', async(ctx, next) => {
    // 看上去数据的判断有点简单？
    // 其实，实际项目也是这么做的，只不过后端接口在联调阶段会proxy到线下后端的数据服务器接口
    // 我们只需要传给后端city和page这两个参数即可，复杂的判断后端会处理
    // 不过我们需要在开发的时候考虑到，mock数据中如果hasMore为false的情况
    console.log('当前城市：' + ctx.params.city);
    console.log('当前页码：' + ctx.params.page);
    // 假设请求page5就没有更多了
    guessData.hasMore = true;
    if (ctx.params.page == 5) {
        console.log('nani');
        
        guessData.hasMore = false;
    }
    ctx.body = guessData;
});

// log error
app.on('error', (err, ctx) => {
    console.log('server error', err, ctx);
});

app.listen(7777);