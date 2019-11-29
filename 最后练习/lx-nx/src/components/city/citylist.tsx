import React, { Component } from "react";
import axios from "axios";
import { cityface } from "../../type/type";
import { Drawer } from "antd";
export default class citylist extends Component<any> {
  state: cityface = {
    visible: false,
    ind: 0,
    inds: 0,
    children: [],
    tabnav: [
      {
        id: 0,
        name: "全部城市✎"
      },
      {
        id: 1,
        name: "综合排序✎"
      },
      {
        id: 2,
        name: "预定时限✎"
      }
    ],
    list: [],
    states: null
  };
  showDrawer(index: number, id: number) {
    let children: any = [];
    let states: any = null;
    if (id === 0) {
      states = 0;
      children = [
        {
          name: "北京",
          id: 1
        },
        {
          name: "宁夏",
          id: 2
        },
        {
          name: "上海",
          id: 3
        }
      ];
    } else if (id === 1) {
      states = 1;
      children = [
        {
          name: "升序",
          id: 1
        }
      ];
    }
    this.setState({
      visible: true,
      children,
      states,
      ind: index
    });
  }

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const { tabnav, list, ind, inds } = this.state;
    return (
      <div>
        <div className="tabs">
          {tabnav.map((item: any, index: number) => (
            <span
              className={ind === index ? "ac" : ""}
              key={item.id}
              onClick={this.showDrawer.bind(this, index, item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div>
          {list.map((item: any, index: number) => (
            <div
              className="list"
              key={index}
              onClick={this.gotodetail.bind(this, item)}
            >
              <div className="imgs">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="txt">
                <h2>
                  {item.title}
                  <span className="jingqu">{item.jibie}</span>
                </h2>
                <span className="fen">{item.pingfen}分</span>
                <span className="jia">{item.pingjia}人评价</span>
                <span className="qian">￥：{item.money}元</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Drawer
            title="全部城市"
            closable={false}
            placement="bottom"
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div>
              {this.state.children.map((item: any, index: number) => (
                <p
                  key={index}
                  className={inds === index ? "aa" : ""}
                  onClick={this.shaixuan.bind(this, item.id, index)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
  gotodetail(item: any) {
    this.props.history.push({
      pathname: "/detail",
      query: item
    });
  }
  shaixuan(id: number, index: number) {
    if (this.state.states === 0) {
      axios.post("/getcity", { id }).then(res => {
        this.setState({
          list: res.data.result
        });
      });
    } else if (this.state.states === 1) {
      axios.get("/paixu").then(res => {
        this.setState({
          list: res.data.result
        });
      });
    }
    this.setState({
      inds: index,
      visible: false
    });
  }
  componentDidMount() {
    axios.get("/getcitylist").then(res => {
      this.setState({
        list: res.data.result
      });
    });
  }
}
