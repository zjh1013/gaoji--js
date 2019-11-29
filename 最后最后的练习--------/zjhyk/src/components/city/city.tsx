import React, { Component } from "react";
import { Drawer } from "antd";
import axios from "axios";
export default class city extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "城市选择"
      },
      {
        id: 2,
        name: "综合排序"
      }
    ],
    visible: false,
    chengshi: [],
    states: null,
    citys: []
  };
  componentDidMount() {
    axios.get("/getcitylist").then(res => {
      this.setState({
        citys: res.data.result
      });
    });
  }

  showDrawer(id: number) {
    let chengshi: any = [];
    let states: any = null;
    if (id === 1) {
      states = 0;
      chengshi = [
        {
          id: 1,
          name: "北京"
        },
        {
          id: 3,
          name: "上海"
        },
        {
          id: 2,
          name: "宁夏"
        }
      ];
    } else if (id === 2) {
      states = 1;
      chengshi = [
        {
          id: 1,
          name: "金钱排序"
        }
      ];
    }
    this.setState({
      visible: true,
      chengshi,
      states
    });
  }

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <div className="zong">
          {this.state.data.map((item: any) => (
            <span key={item.id} onClick={this.showDrawer.bind(this, item.id)}>
              {item.name}
            </span>
          ))}
        </div>
        <div>
          {this.state.citys.map((item: any) => (
            <div key={item.id} className="city">
              <p>{item.title}</p>
              <p>{item.money}</p>
            </div>
          ))}
        </div>
        <div>
          <Drawer
            title="Basic Drawer"
            placement="bottom"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div>
              {this.state.chengshi.map((item: any) => (
                <p key={item.id} onClick={this.shaixuan.bind(this, item.id)}>
                  {item.name}
                </p>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
  shaixuan(id: number) {
    this.setState({
      visible: false
    });
    this.state.visible = false;
    if (this.state.states === 0) {
      axios.post("/shaicity", { id }).then(res => {
        this.setState({
          citys: res.data.result
        });
      });
    } else if (this.state.states === 1) {
      axios.get("/paixu").then(res => {
        this.setState({
          citys: res.data.result
        });
      });
    }
  }
}
