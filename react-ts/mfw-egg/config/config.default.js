/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1573712482938_1476";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false
      }
    },
    mysql: {
      // database configuration
      client: {
        // host
        host: "localhost",
        // port
        port: "3306",
        // username
        user: "root",
        // password
        password: "123321",
        // database
        database: "mfw-egg"
      },
      app: true,
      // load into agent, default is close
      agent: false
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
