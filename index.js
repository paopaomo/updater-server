const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static-server');
const compareVersions = require('compare-versions');

const app = new Koa();
const router = new Router();

// getNewVersion 一般会去做数据库的匹配
const getNewVersion = (version) => {
    if(!version) {
        return null;
    }
    const maxVersion = {
        name: '2.0.0',
        pub_date: '2020-02-24T14:30:39.307Z',
        notes: '新增功能AAA',
        url: 'http://127.0.0.1:8888/public/Mercurius-2.0.0-mac.zip'
    };
    if(compareVersions.compare(maxVersion.name, version, '>')) {
        return maxVersion;
    }
    return null;
};

router.get('/darwin', (ctx, next) => {
    // 处理mac更新, ?version=1.0.0&uid=123
    const { version } = ctx.query;
    const newVersion = getNewVersion(version);
    if(newVersion) {
        ctx.body = newVersion;
    } else {
        ctx.status = 204;
    }
});

app.use(serve({ rootDir: 'public', rootPath: '/public' }));
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8888);



