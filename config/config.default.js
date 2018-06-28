'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1530112630094_7239';

    // add your config here
    config.middleware = [];

    //关闭csrf
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        // 白名单
        // domainWhiteList: [ 'http://localhost:8080' ]
    };

    return config;
};
