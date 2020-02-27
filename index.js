const Koa = require('koa');
const serve = require('koa-static-server');
const updateRouter = require('./router/update.route');

const app = new Koa();

app.use(serve({ rootDir: 'public', rootPath: '/public' }));

app.use(updateRouter.routes());

app.listen(8888);



