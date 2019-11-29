"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/getlist", controller.home.getlist);

  router.get("/getzuo", controller.home.getzuo);
  router.get("/getyou", controller.home.getyou);

  router.post("/delshop", controller.home.delshop);

  router.get("/getdizhi", controller.home.getdizhi);
  router.post("/adddizhi", controller.home.adddizhi);
  router.post("/deldizhi", controller.home.deldizhi);
  router.post("/editdizhi", controller.home.editdizhi);

  router.get("/getnav", controller.home.getnav);
};
