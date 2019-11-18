import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <header>
        <div className="h3">
          <h2>M</h2>
          <p>马蜂窝</p>
        </div>

        <div>
          <input type="text" />
        </div>
        <span>登录</span>
      </header>
    );
  }
}
