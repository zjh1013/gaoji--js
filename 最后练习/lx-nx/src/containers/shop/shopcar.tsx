import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
export default class shopcar extends Component {
  render() {
    return (
      <div>
        <Header back={false} title="购物车"></Header>
        <div className="yamaxun"></div>
        <Footer></Footer>
      </div>
    );
  }
}
