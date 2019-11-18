import React, { Component } from "react";
import Hea from "../components/header/header";
import Banner from "../components/banner/banner";
import IconList from "../components/iconList/iconlist";
import Newsist from "../components/newslist/newslist";
export default class index extends Component {
  render() {
    return (
      <div className="Ind">
        <header>
          <Hea></Hea>
        </header>
        <div className="content">
          <Banner></Banner>
          <IconList></IconList>
          <Newsist></Newsist>
        </div>
      </div>
    );
  }
}
