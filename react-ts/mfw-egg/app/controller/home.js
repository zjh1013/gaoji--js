"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async getbannerlist() {
    const { ctx } = this;
    const $sql = `select * from bannerlist`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async geticonlist() {
    const { ctx } = this;
    const $sql = `select * from iconlist`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getnewslist() {
    const { ctx } = this;
    const { pageSize, pageCount } = ctx.request.body;
    const size = (pageSize - 1) * pageCount;
    const $sql = `select * from newslist limit ${size},${pageCount}`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
}

module.exports = HomeController;
