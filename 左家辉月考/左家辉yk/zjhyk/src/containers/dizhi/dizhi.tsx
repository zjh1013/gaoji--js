import React, { Component } from "react";
import axios from "axios";
import { dizhiface } from "../../type/type";

export default class dizhi extends Component<any> {
  state: dizhiface = {
    titles: "",
    names: "",
    phones: "",
    list: [],
    ids: ""
  };
  getdata() {
    axios.get("/getdizhi").then(res => {
      this.setState({
        list: res.data.result
      });
    });
  }
  componentDidMount() {
    this.getdata();
  }
  adds() {
    axios
      .post("/adddizhi", {
        names: this.state.names,
        titles: this.state.titles,
        phones: this.state.phones
      })
      .then(res => {
        if (res.data.code == 1) {
          this.getdata();
        }
      });
  }
  del(id: number) {
    axios.post("deldizhi", { id }).then(res => {
      if (res.data.code == 1) {
        this.getdata();
      }
    });
  }
  edit(id: number) {
    this.state.ids = id;
  }
  bianjichenggong() {
    axios
      .post("/editdizhi", {
        titles: this.state.titles,
        names: this.state.names,
        phones: this.state.phones,
        id: this.state.ids
      })
      .then(res => {
        console.log(res);
        if (res.data.code == 1) {
          this.getdata();
        }
      });
  }
  render() {
    let { list } = this.state;
    return (
      <div>
        <div className="heas">
          <button onClick={this.back.bind(this)}>返回</button>
        </div>
        <div>
          <p>
            地址：
            <input onChange={this.title.bind(this)} />
          </p>
          <p>
            姓名：
            <input onChange={this.names.bind(this)} />
          </p>
          <p>
            电话：
            <input onChange={this.phones.bind(this)} />
          </p>
        </div>
        <button onClick={this.adds.bind(this)}>添加</button>
        <div>
          {list.map((item: any, index: any) => (
            <div key={index} className="dizhi">
              <p>地址：{item.name}</p>
              <p>姓名：{item.phone}</p>
              <p>手机号{item.phone}</p>
              <button onClick={this.del.bind(this, item.id)}>删除</button>
              <button onClick={this.edit.bind(this, item.id)}>编辑</button>
              <button onClick={this.bianjichenggong.bind(this)}>
                编辑成功
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  back() {
    this.props.push("dingdan");
  }
  title(e: any) {
    this.setState({
      titles: e.target.value
    });
  }
  names(e: any) {
    this.setState({
      names: e.target.value
    });
  }
  phones(e: any) {
    this.setState({
      phones: e.target.value
    });
  }
}
