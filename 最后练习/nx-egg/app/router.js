"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/getbannerlist", controller.home.getbannerlist); //获取轮播图列表
  router.get("/geticonlist", controller.home.geticonlist); //获取icon列表
  router.get("/getcitylist", controller.home.getcitylist); //获取城市列表
  router.post("/getcity", controller.home.getcity);
  router.get("/paixu", controller.home.paixu);
  router.post("/pinglun", controller.home.pinglun); //获取每个详情里面的评论
  router.post("/addp", controller.home.addp); //添加评论
  router.post("/delp", controller.home.delp); //删除评论列表
  router.get("/getshoplist", controller.home.getshoplist); //获取这个商品列表的

  router.post("/addshop", controller.home.addshop);

  router.get("/getymxzuo", controller.home.getymxzuo);
  router.get("/getymxyou", controller.home.getymxyou);
  router.post("/upcount", controller.home.upcount);
  router.post("/jiajia", controller.home.jiajia);
  router.post("/jianjian", controller.home.jianjian);
  router.post("/addshopcar", controller.home.addshopcar);
  // router.post("/upcounts", controller.home.upcounts);
};
