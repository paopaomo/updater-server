const Router = require('koa-router');
const router = new Router();
const { getRemoteControlNewVersion, getFireSaleNewVersion } = require('../helper/version');

router.get('/remote-control/releases/darwin', (ctx, next) => {
    // 处理mac更新, ?version=1.0.0&uid=123
    const { version } = ctx.query;
    const newVersion = getRemoteControlNewVersion(version);
    if(newVersion) {
        ctx.body = newVersion;
    } else {
        ctx.status = 204;
    }
});

router.get('/fire-sale/releases/darwin', (ctx, next) => {
    const { version } = ctx.query;
    const newVersion = getFireSaleNewVersion(version);
    if(newVersion) {
        ctx.body = newVersion;
    } else {
        ctx.status = 204;
    }
});

module.exports = router;
