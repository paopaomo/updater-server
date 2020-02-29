const Router = require('koa-router');
const multer = require('koa-multer');
const path = require('path');
const writeFile = require('write-file');
const uuid = require('uuid');

const router = new Router();

const crashPath = path.join(__dirname, '../crash');
const exceptionPath = path.join(__dirname, '../uncaughtexceptions');

const uploadCrash = multer({ dest: crashPath });

router.post('/crash', uploadCrash.single('upload_file_minidump'), (ctx, next) => {
    const { body, file } = ctx.req;
    const { filename } = file;
    const report = {
        ...body,
        filename,
        date: new Date()
    };
    const filePath = path.resolve(__dirname, `../crash/${filename}.json`);

    writeFile(filePath, JSON.stringify(report), (err) => {
        if(err) {
            return console.error('Error Saving', report);
        }
        console.log('Crash Saved', filePath, report);
    });

    ctx.status = 200;
});

router.post('/uncaughtexceptions', (ctx) => {
    const filePath = path.resolve(__dirname, `${exceptionPath}/${uuid.v1()}.json`);
    const report = {
        ...ctx.request.body,
        date: new Date()
    };

    writeFile(filePath, JSON.stringify(report), error => {
        if(error) {
            return console.error('Error Saving', report);
        }
        console.log('Error Saved', filePath, report);
    });

    ctx.status = 200;
});

module.exports = router;
