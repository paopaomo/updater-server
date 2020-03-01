const compareVersions = require('compare-versions');

// getRemoteControlNewVersion 一般会去做数据库的匹配
const getRemoteControlNewVersion = (version) => {
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

const getFireSaleNewVersion = (version) => {
    if(!version) {
        return null;
    }
    const maxVersion = {
        name: '2.0.0',
        pub_date: '2020-02-24T14:30:39.307Z',
        notes: 'Fire Sale 新增功能 BBB',
        url: 'http://127.0.0.1:8888/public/FireSale-2.0.0-mac.zip'
    };
    if(compareVersions.compare(maxVersion.name, version, '>')) {
        return maxVersion;
    }
    return null;
};

module.exports = { getRemoteControlNewVersion, getFireSaleNewVersion };
