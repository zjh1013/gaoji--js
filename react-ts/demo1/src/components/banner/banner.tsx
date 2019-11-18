import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.css";
interface Bannerface {
  banner: any[];
}
export default class banner extends Component {
  public state: Bannerface = {
    banner: [
      {
        imgUrl:
          "https://n1-q.mafengwo.net/s15/M00/E2/D1/CoUBGV3Gsk6AE6UBACB0ueuHLAo330.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90"
      },
      {
        imgUrl:
          "https://b4-q.mafengwo.net/s15/M00/F4/E6/CoUBGV3JOZKAYRMpACtg9uJ5exA386.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90"
      },
      {
        imgUrl:
          "https://b4-q.mafengwo.net/s15/M00/91/08/CoUBGV3KY-OAM4DiACbGe19jLYc548.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90"
      }
    ]
  };
  public render() {
    const { banner } = this.state;
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {banner.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <img src={item.imgUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  public componentDidMount() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true
    });
  }
}
