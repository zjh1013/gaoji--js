import React, { Component } from "react";
import axios from "axios"; //引入axios
import { homelistface } from "../../type/type"; //引入这个进口定义的东西
export default class homelist extends Component<any> {
  state: homelistface = {
    //定义state
    hea: [
      //定义数组
      {
        name: "综合排序✎"
      },
      {
        name: "销量最高✎"
      },
      {
        name: "距离最近✎"
      },
      {
        name: "筛选✎"
      }
    ],
    list: [] //定义列表
  };
  render() {
    let { hea, list } = this.state; //结构state的值
    return (
      //render进行渲染
      <div>
        <div className="hea">
          {hea.map((item: any, index: number) => (
            <span key={index}>{item.name}</span>
          ))}
        </div>
        <div>
          {list.map((item1: any, index1: number) => (
            <div className="list" key={index1} onClick={this.xq.bind(this)}>
              <div className="listzuo">
                <div>
                  <h2>图片</h2>
                </div>
              </div>
              <div className="listyou"></div>
              <div>
                <h3>{item1.title}</h3>
                <h3>评分：{item1.pingfen}</h3>
                <h3>销量：{item1.xiaoliang}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  xq() {
    //详情的事件
    this.props.push("detail");
  }
  componentDidMount() {
    //生命周期函数 第一次进页面获取数据
    axios.get("/getlist").then(res => {
      this.setState({
        list: res.data.result
      });
    });
  }
}
