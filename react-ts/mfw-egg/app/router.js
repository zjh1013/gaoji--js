"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/getbannerlist", controller.home.getbannerlist); //查询轮播图列表
  router.get("/geticonlist", controller.home.geticonlist); //查询icon图标列表
  router.get("/getshoplist", controller.home.getshoplist); //查询商品列表

  router.post("/getnewslist", controller.home.getnewslist); //查询新闻列表
  router.post("/sousuonewslist", controller.home.sousuonewslist); //查询新闻列表
};
