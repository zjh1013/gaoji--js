import React, { Component } from "react";
import { connect } from "dva";
@connect((store: any) => {
  return store;
})
class shopcar extends Component<any> {
  render() {
    console.log(this.props, "pros-----");
    return (
      <div>
        <div>
          {this.props.shop.shopcar.map((item: any) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              {item.count >= 1 ? (
                <div>
                  <button onClick={this.sub.bind(this, item.id)}>--</button>
                  {item.count}
                  <button onClick={this.gw.bind(this, item.id)}>++</button>
                </div>
              ) : (
                <button onClick={this.gw.bind(this, item.id)}>加入购物</button>
              )}
            </div>
          ))}
        </div>
        <div>总金额：{this.props.shop.totalprice}</div>
        <div>总个数：{this.props.shop.totalcount}</div>
      </div>
    );
  }
  gw(id: number) {
    this.props.dispatch({ type: "shop/add", id });
  }
  sub(id: number) {
    this.props.dispatch({ type: "shop/sub", id });
  }
}
export default shopcar;
