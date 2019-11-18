import React, { Component } from "react";
import "../../assest/css/index.css";
import "antd-mobile/dist/antd-mobile.css";
// import Hea from "../../components/header/header";
import Foo from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Iocn from "../../components/icon/icon";
import List from "../../components/list/list";
export default class index extends Component {
  render() {
    return (
      <div id="Ind">
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
        <div className="content">
          <Banner></Banner>
          <Iocn></Iocn>
          <List></List>
        </div>
        <footer>
          <Foo></Foo>
        </footer>
      </div>
    );
  }
}
