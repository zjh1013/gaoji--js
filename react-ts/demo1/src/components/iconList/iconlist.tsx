import React, { Component } from "react";

interface iconListFace {
  iconList: any[];
}
export default class iconlist extends Component {
  public state: iconListFace = {
    iconList: [
      {
        title: "找攻略"
      },
      {
        title: "看游记"
      },
      {
        title: "问达人"
      },
      {
        title: "结伴"
      },
      {
        title: "酒店"
      },
      {
        title: "去旅行"
      },
      {
        title: "机票"
      },
      {
        title: "当地玩乐"
      }
    ]
  };
  public render() {
    const { iconList } = this.state;
    return (
      <div>
        <div className="icon">
          {iconList.map((item, index) => (
            <div className="a1" key={index}>
              <span className="s1"></span>
              <span className="s2">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="tui">
          <p> ＞ 推荐攻略 ＜ </p>
        </div>
      </div>
    );
  }
}
