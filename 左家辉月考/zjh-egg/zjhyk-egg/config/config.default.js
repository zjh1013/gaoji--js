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
  config.keys = appInfo.name + "_1574747060395_3298";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
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
        database: "jsyk"
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false
    },
    security: {
      csrf: false
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
