import React, { Component } from "react";
import { connect } from "dva"; //涌入dva
import { Drawer, Button } from "antd"; //引入antd
import { dingdanface } from "../../type/type"; //引入定义的接口
@connect((store: any) => {
  //connect函数
  return store;
})
class dingdan extends Component<any> {
  //类函数定义组件
  state: dingdanface = { visible: false }; //定义state

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <div className="heas">订单列表</div>
        <div>
          <h2 onClick={this.dizhi.bind(this)}>✚选择收货地址</h2>
        </div>
        <div>
          <h2 onClick={this.showDrawer}>○立即送出</h2>
        </div>
        {this.props.food.youcar.map((item1: any, index1: number) => (
          <div key={index1} className="yaa">
            <div className="zuos">
              <div>
                <h3>图片</h3>
              </div>
            </div>
            <div className="yous">
              <p>{item1.title}</p>
              <p>销售：{item1.xiaoshou}</p>
              <p>价格:{item1.qian}</p>
              {item1.count >= 1 ? (
                <div>
                  <button onClick={this.subs.bind(this, item1.id)}>--</button>
                  {item1.count}
                  <button onClick={this.adds.bind(this, item1.id)}>++</button>
                </div>
              ) : (
                <button onClick={this.adds.bind(this, item1.id)}>
                  加入购物车
                </button>
              )}
            </div>
          </div>
        ))}
        <div>
          <Drawer
            title="Basic Drawer"
            placement="bottom"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
      </div>
    );
  }
  dizhi() {
    this.props.push("dizhi");
  }
  adds(id: number) {
    this.props.dispatch({ type: "food/add", id });
  }
  subs(id: number) {
    this.props.dispatch({ type: "food/sub", id });
  }
}
export default dingdan;
