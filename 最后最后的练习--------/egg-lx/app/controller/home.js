"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async getbannerlist() {
    const { ctx } = this;
    const $sql = `select * from banner `;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getcitylist() {
    const { ctx } = this;
    const $sql = `select * from city `;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async shaicity() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `select * from city where type=${id}`;
    const result = await this.app.mysql.query($sql);
    if (result.length >= 1) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
  async paixu() {
    const { ctx } = this;
    const $sql = `select * from city order by money`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async shoplist() {
    const { ctx } = this;
    const $sql = `select * from shoplist`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getzuo() {
    const { ctx } = this;
    const $sql = `select * from ymxzuo`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getyou() {
    const { ctx } = this;
    const $sql = `select * from ymxyou`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
}

module.exports = HomeController;
