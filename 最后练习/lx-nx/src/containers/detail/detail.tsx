import React, { Component } from "react";
import { connect } from "dva";
import axios from "axios";
import Header from "../../components/header/header";
import { detailface } from "../../type/type";
@connect((store: any) => {
  return store;
})
class detail extends Component<any> {
  state: detailface = {
    ipt1: "",
    ipt2: "",
    list: []
  };
  ipt1(e: any) {
    this.setState({
      ipt1: e.target.value
    });
  }
  ipt2(e: any) {
    this.setState({
      ipt2: e.target.value
    });
  }
  render() {
    const { list } = this.state;
    const { imgUrl } = this.props.location.query;
    return (
      <div>
        <Header title="详情"></Header>
        <div className="d-img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="jing">
          <div className="jing-zuo"></div>
          <div className="jing-you"></div>
        </div>
        <h1>门票</h1>
        <div className="yu">
          <div className="zuo">
            <h2>西部影城成人票</h2>
            <p>十点前预定，当天有效、</p>
            <span>不需要取票</span>
            <span>随时退</span>
            <p>预定须知</p>
          </div>
          <div className="you">
            <h1>￥86元</h1>
            <span>预定</span>
          </div>
        </div>
        <div className="yu">
          <div className="zuo">
            <h2>西部影城成人票</h2>
            <p>十点前预定，当天有效、</p>
            <span>不需要取票</span>
            <span>随时退</span>
          </div>
          <div className="you">
            <h1>￥38元</h1>
            <span>预定</span>
          </div>
        </div>
        <div>
          <p>
            <input type="text" onChange={this.ipt1.bind(this)} />
          </p>
          <p>
            <input type="text" onChange={this.ipt2.bind(this)} />
          </p>
          <button onClick={this.ping.bind(this)}>评论</button>
        </div>
        <h2 onClick={this.gotoquanbu.bind(this)}>查看全部点评>>>>></h2>
        <div>
          {list.map((item: any, index: number) => (
            <div key={index} className="lun">
              <div>
                <p>用户名：{item.titles}</p>
                <h3>评论内容：{item.context}</h3>
              </div>
              <button onClick={this.delps.bind(this, item.id)}>删除评论</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  gotoquanbu(item: any) {
    console.log(this.props);
    this.props.push({
      pathname: "/quanbu",
      query: item
    });
  }
  componentDidMount() {
    this.updata();
  }
  delps(id: number) {
    axios.post("/delp", { id }).then(res => {
      console.log(res);
      if (res.data.code === 1) {
        this.updata();
      }
    });
  }
  ping() {
    axios
      .post("/addp", {
        ipt1: this.state.ipt1,
        ipt2: this.state.ipt2,
        cityid: this.props.location.query.id
      })
      .then(res => {
        this.updata();
      });
  }
  updata() {
    axios.post("/pinglun", { id: this.props.location.query.id }).then(res => {
      this.setState({
        list: res.data.result
      });
    });
  }
}
export default detail;
