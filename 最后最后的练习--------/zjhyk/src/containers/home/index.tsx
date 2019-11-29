import React, { Component } from "react";
import "../../assest/css/index.css";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import City from "../../components/city/city";
import "antd/dist/antd.css";
export default class index extends Component {
  render() {
    return (
      <div>
        <Header title="首页"></Header>
        <Banner></Banner>
        <City></City>
      </div>
    );
  }
}
