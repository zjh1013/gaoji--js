"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async getlist() {
    const { ctx } = this;
    const $sql = `select * from list`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getzuo() {
    const { ctx } = this;
    const $sql = `select * from lefts`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getyou() {
    const { ctx } = this;
    const $sql = `select * from rights`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async delshop() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `DELETE FROM rights WHERE  id=${id}`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getnav() {
    const { ctx } = this;
    const $sql = `select * from nav`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getdizhi() {
    const { ctx } = this;
    const $sql = `select * from dizhi`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async adddizhi() {
    const { ctx } = this;
    const { names, titles, phones } = ctx.request.body;
    const $sql = `insert into dizhi (name,title,phone) values (?,?,?)`;
    const $params = [names, titles, phones];
    const result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 1,
      result
    };
  }
  async deldizhi() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `DELETE FROM dizhi WHERE  id=${id}`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async editdizhi() {
    const { ctx } = this;
    const { titles, names, phones, id } = ctx.request.body;
    const $sql = `UPDATE dizhi set title=?,name=?,phone=? where id=? `;
    const $params = [titles, names, phones, id];
    const result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 1,
      result
    };
  }
  // UPDATE `jsyk`.`dizhi` SET `title`='12221' WHERE  `id`=10;
  // DELETE FROM `jsyk`.`dizhi` WHERE  `id`=3;
}

module.exports = HomeController;
