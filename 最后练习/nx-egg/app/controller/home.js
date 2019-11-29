"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async getbannerlist() {
    const { ctx } = this;
    const $sql = `select * from banner`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async geticonlist() {
    const { ctx } = this;
    const $sql = `select * from icon`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getcitylist() {
    const { ctx } = this;
    const $sql = `select * from city`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async getcity() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `select * from city where type=?`;
    const $params = [id];
    const result = await this.app.mysql.query($sql, $params);
    if (result.length >= 1) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
  async paixu() {
    const { ctx } = this;
    const $sql = `select * from city order by money asc`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }

  async getshoplist() {
    const { ctx } = this;
    const $sql = `select * from shoplist `;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }

  async pinglun() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `select * from ping,city where ping.cityid=city.id and ping.cityid=${id}`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }

  async addp() {
    const { ctx } = this;
    const { ipt1, ipt2, cityid } = ctx.request.body;
    const $sql =
      "INSERT INTO`ping` (`titles`,`context`, `cityid`) VALUES (?,?,?)";
    const $params = [ipt1, ipt2, cityid];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
  async addshop() {
    const { ctx } = this;
    const { name, price, count } = ctx.request.body;
    const $sql = `insert into shopcar (name,price,count)values(?,?,?)`;
    const $params = [name, price, count];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 1) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
  async delp() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `DELETE FROM ping WHERE id=?`;
    const $params = [id];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        msg: "成功删除数据", //提示信息
        result
      };
    } else {
      ctx.body = {
        code: 0,
        msg: "删除数据失败" //提示信息
      };
    }
  }

  // UPDATE `nx`.`shoplist` SET `count`='1' WHERE  `id`=1;
  // DELETE FROM `nx`.`shopcar` WHERE  `id`=4;

  async getymxzuo() {
    const { ctx } = this;
    const $sql = `select * from ymxzuo`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }

  async getymxyou() {
    const { ctx } = this;
    const $sql = `select * from ymxyou`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async upcount() {
    const { ctx } = this;
    const { count, id } = ctx.request.body;
    const $sql = `update ymxyou set count=${count} where id=${id}`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }

  async jiajia() {
    const { ctx } = this;
    const { count, id } = ctx.request.body;
    const $sql = `update ymxyou set count=${count} where id=${id}`;
    // const $params = [count, id];
    const result = await this.app.mysql.query($sql);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        msg: "成功更新数据", //提示信息
        result
      };
    } else {
      ctx.body = {
        code: 0,
        msg: "更新数据失败" //提示信息
      };
    }
  }
  async jianjian() {
    const { ctx } = this;
    const { count, id } = ctx.request.body;
    const $sql = `update ymxyou set count=${count} where id=${id}`;
    // const $params = [count, id];
    const result = await this.app.mysql.query($sql);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        msg: "成功更新数据", //提示信息
        result
      };
    } else {
      ctx.body = {
        code: 0,
        msg: "更新数据失败" //提示信息
      };
    }
  }
  async addshopcar() {
    const { ctx } = this;
    const { title, qian, count } = ctx.request.body;
    const $sql = `insert into ymxcar (title,qian,count) values (?,?,?)`;
    const $params = [title, qian, count];
    const result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 1,
      result
    };
  }
  // async upcounts() {
  //   const { ctx } = this;
  //   const { count, id } = ctx.request.body;
  //   const $sql = `update ymxcar set count=${count} where id=${id}`;
  //   const result = await this.app.mysql.query($sql);
  //   ctx.body = {
  //     code: 1,
  //     result
  //   };
  // }
}

module.exports = HomeController;
