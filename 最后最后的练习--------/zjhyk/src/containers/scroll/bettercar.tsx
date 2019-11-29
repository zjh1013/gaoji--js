import React, { Component } from "react";
import { connect } from "dva";
@connect((store: any) => {
  return store;
})
class bettercar extends Component<any> {
  render() {
    console.log(this.props.scroll.youcar);
    return (
      <div>
        {this.props.scroll.youcar.map((item1: any, index1: number) => (
          <div key={index1} className="city">
            <p>{item1.title}</p>
            <p>{item1.qian}</p>
            {item1.count >= 1 ? (
              <div>
                <button onClick={this.sub.bind(this, item1.id)}>--</button>
                {item1.count}
                <button onClick={this.gw.bind(this, item1.id)}>++</button>
              </div>
            ) : (
              <button onClick={this.gw.bind(this, item1.id)}>加入购物车</button>
            )}
          </div>
        ))}
        <div>总价：{this.props.scroll.totalprice}</div>
        <div>总数量：{this.props.scroll.totalcount}</div>
      </div>
    );
  }
  gw(id: number) {
    this.props.dispatch({ type: "scroll/add", id });
  }
  sub(id: number) {
    this.props.dispatch({ type: "scroll/sub", id });
  }
}
export default bettercar;
