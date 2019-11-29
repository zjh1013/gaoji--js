import React, { Component } from "react";

export default class footer extends Component<any> {
  render() {
    return (
      <div className="footer">
        <span onClick={this.shouye.bind(this)}>首页</span>
        <span onClick={this.yamaxun.bind(this)}>亚马逊</span>
        <span onClick={this.shopcar.bind(this)}>购物车</span>
        <span>我的</span>
      </div>
    );
  }
  shopcar() {
    this.props.history.push("shopcar");
  }
  shouye() {
    this.props.history.push("home");
  }
  yamaxun() {
    this.props.history.push("yamaxun");
  }
  componentDidMount() {}
}
