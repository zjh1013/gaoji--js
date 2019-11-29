import React, { Component } from "react";
import "../../assest/css/index.css";
import "antd/dist/antd.css";
import Banner from "../../components/banner/banner";
import "antd-mobile/dist/antd-mobile.css";
import Icon from "../../components/icon/icon";
import Citylist from "../../components/city/citylist";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { connect } from "dva";
class index extends Component<any> {
  render() {
    return (
      <div>
        <Header back={false} title="首页"></Header>
        <div>
          <div className="zhongjian">
            <Banner></Banner>
            <Icon></Icon>
            <Citylist history={this.props}></Citylist>
          </div>
          <Footer history={this.props}></Footer>
        </div>
      </div>
    );
  }
}
export default connect((store: any) => {
  return store;
})(index);
