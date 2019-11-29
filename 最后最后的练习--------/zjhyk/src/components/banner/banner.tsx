import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import { connect } from "dva";
// @connect((store: any) => {
//   return store;
// })
class banner extends Component<any> {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176
  };
  componentDidMount() {
    this.props.dispatch({ type: "banner/getbannerlist" });

    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }
  render() {
    // console.log(this.props.banner.bannerdata);
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
            {this.props.banner.bannerdata.map((val: any) => (
              <a
                key={val}
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
                    // fire window resize event to change height
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
}
export default connect((store: any) => {
  return store;
})(banner);
