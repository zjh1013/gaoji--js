"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/getbannerlist", controller.home.getbannerlist);
  router.get("/getcitylist", controller.home.getcitylist);
  router.post("/shaicity", controller.home.shaicity);
  router.get("/paixu", controller.home.paixu);

  router.get("/shoplist", controller.home.shoplist);

  router.get("/getzuo", controller.home.getzuo);
  router.get("/getyou", controller.home.getyou);
};
