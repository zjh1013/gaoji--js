import React, { Component } from "react";

interface newslistFacr {
  newslist: any[];
}
export default class newslist extends Component {
  public state: newslistFacr = {
    newslist: [
      {
        imgUrl:
          "https://p1-q.mafengwo.net/s15/M00/AE/50/CoUBGV3KcBWADLaIAA7irDSMmZk801.png?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
        title: " Hi，你读过《人类未解之谜》吗?",
        text:
          "爱死了的接口拉三等奖哈数据库的呼声卡里的后监控山东矿机安徽大口径收到货副科级"
      },
      {
        imgUrl:
          "https://b3-q.mafengwo.net/s9/M00/97/DF/wKgBs1eXLTWAG845AAHlof5Ls0822.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
        title: "厦门有哪些不易发现的美景?",
        text:
          "爱死了的接口拉三等奖哈数据库的呼声卡里的后监控山东矿机安徽大口径收到货副科级"
      },
      {
        imgUrl:
          "https://n3-q.mafengwo.net/s10/M00/BB/C1/wKgBZ1iG-yCAFCvEAANuoLiL5CI82.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
        title: "在北京去哪吃地道京味儿美食?",
        text:
          "爱死了的接口拉三等奖哈数据库的呼声卡里的后监控山东矿机安徽大口径收到货副科级"
      },
      {
        imgUrl:
          "https://b1-q.mafengwo.net/s9/M00/2E/E6/wKgBs1frZwaAdghWAAnKHAjLzx4614.png?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
        title: "去哪里才能吃到【物美价廉】的北京烤鸭?",
        text:
          "爱死了的接口拉三等奖哈数据库的呼声卡里的后监控山东矿机安徽大口径收到货副科级"
      }
    ]
  };
  public render() {
    const { newslist } = this.state;
    return (
      <div>
        {newslist.map((item, index) => (
          <div className="news" key={index}>
            <div className="newsshang">
              <p>{item.title}</p>
            </div>
            <div className="newsxia">
              <div className="imgdiv">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="textdiv"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
