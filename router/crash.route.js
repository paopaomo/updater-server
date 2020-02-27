const Router = require('koa-router');
const router = new Router();
const multer = require('koa-multer');

const uploadCrash = multer({ dest: 'crash/' });

router.post('/crash', uploadCrash.single('upload_file_minidump'), (ctx, next) => {
    console.log(ctx.req.body);
    // 存DB
});

module.exports = router;
