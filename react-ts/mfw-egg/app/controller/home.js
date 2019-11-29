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
  async getshoplist() {
    const { ctx } = this;
    const $sql = `select * from shoplist`;
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
  async sousuonewslist() {
    const { ctx } = this;
    const { val } = ctx.request.body;
    console.log(val, "----------");
    if (val === null) {
      ctx.body = {
        code: 0,
        msg: "失败"
      };
    } else {
      const $sql = `select * from newslist where title like '%${val}%'`;
      const result = await this.app.mysql.query($sql);
      ctx.body = {
        code: 1,
        result
      };
    }
  }
}
// SELECT * FROM newslist WHERE title LIKE '%北京%'

module.exports = HomeController;
