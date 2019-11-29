import React, { Component } from "react";
import "../../css/index.css";
import Header from "../../components/header/header";
// import Icon from "../../components/icon/icon";
import Homelist from "../../components/homelist/homelist";
import "antd/dist/antd.css";
export default class index extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        {/* <Icon></Icon> */}
        <Homelist {...this.props}></Homelist>
      </div>
    );
  }
}
