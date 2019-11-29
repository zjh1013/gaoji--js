import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import { connect } from "dva";
import { bannerface } from "../../type/type";
@connect((store: any) => {
  return store;
})
class banner extends Component<any> {
  state: bannerface = {
    data: ["1", "2", "3"],
    imgHeight: 176
  };
  public render() {
    let banners = this.props.banner.datas;
    return (
      <div>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={index => console.log("slide to", index)}
          >
            {banners !== undefined &&
              banners.map((val: any) => (
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    src={val.imgUrl}
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
      </div>
    );
  }
  public componentDidMount() {
    this.props.dispatch({ type: "banner/getbannerlist" });
  }
}
export default banner;
