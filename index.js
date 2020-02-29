const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static-server');
const updateRouter = require('./router/update.route');
const crashRouter = require('./router/crash.route');

const app = new Koa();

app.use(bodyParser());

app.use(serve({ rootDir: 'public', rootPath: '/public' }));

app.use(updateRouter.routes());
app.use(crashRouter.routes());

app.listen(8888, () => {
    console.log('server start at: http://127.0.0.1:8888');
});



