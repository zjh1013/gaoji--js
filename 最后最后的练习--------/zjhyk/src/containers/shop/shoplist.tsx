import React, { Component } from "react";
import { connect } from "dva";
@connect((store: any) => {
  return store;
})
class shoplist extends Component<any> {
  componentDidMount() {
    this.props.dispatch({ type: "shop/getshoplist" });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          {this.props.shop.shoplist.map((item: any) => (
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
        <div className="ding" onClick={this.gotocar.bind(this)}>
          {this.props.shop.shopcar.length}
        </div>
      </div>
    );
  }
  gw(id: number) {
    this.props.dispatch({ type: "shop/add", id });
  }
  sub(id: number) {
    this.props.dispatch({ type: "shop/sub", id });
  }
  gotocar() {
    this.props.push("shopcar");
  }
}
export default shoplist;
