const Router = require('koa-router');
const router = new Router();
const { getNewVersion } = require('../helper/version');

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

module.exports = router;
