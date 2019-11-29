import React, { Component } from "react";
import axios from "axios";
import { lxface } from "../../constans/type";
import { getsousuo } from "../../constans/api";
export default class lx extends Component {
  state: lxface = {
    list: [],
    pageSize: 1,
    val: ""
  };
  getlist(pageSize: number = this.state.pageSize, pageCount: number = 3) {
    axios.post("/getnewslist", { pageSize, pageCount }).then(res => {
      this.setState({
        list: [...this.state.list, ...res.data.result]
      });
    });
  }
  componentDidMount() {
    this.getlist();
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        <div>
          <h2>
            搜索景点:
            <input onInput={this.sousuojingdian.bind(this)} />
          </h2>
          <button onClick={this.sou.bind(this)}>搜索</button>
        </div>
        {list.map((item: any, index: number) => (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        ))}
        <button onClick={this.gengduo.bind(this)}>
          展示更多的景点。。。。
        </button>
      </div>
    );
  }
  gengduo() {
    this.setState(
      {
        pageSize: this.state.pageSize + 1
      },
      () => {
        this.getlist(this.state.pageSize);
      }
    );
  }
  sousuojingdian(e: any) {
    this.setState({
      val: e.target.value
    });
  }
  sou() {
    axios.post("/sousuonewslist", { val: this.state.val }).then(res => {
      this.setState({
        list: res.data.result
      });
    });
  }
}
