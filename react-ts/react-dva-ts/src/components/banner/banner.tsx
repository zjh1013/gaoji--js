import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import { getBannerList } from "../../app/app";
import { bannerface } from "../../constans/type";
export default class banner extends Component {
  public state: bannerface = {
    data: [],
    imgHeight: 176,
    slideIndex: 0
  };
  public _getbannerlist() {
    getBannerList().then(res => {
      this.setState({
        data: res.data.result
      });
    });
  }
  public componentDidMount() {
    this._getbannerlist();
  }
  public render() {
    return (
      <WingBlank>
        <Carousel
          className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((item: any, index: number) => (
            <a
              key={item}
              href="http://www.alipay.com"
              style={{
                display: "block",
                position: "relative",
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)"
              }}
            >
              <img
                src={item.imgUrl}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
