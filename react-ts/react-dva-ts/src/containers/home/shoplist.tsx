import React, { Component } from "react";
import { connect } from "dva";

class shoplist extends Component<any> {
  render() {
    console.log(this.props.shop.datas.result, "pros====");
    var shops = this.props.shop.datas.result;

    return (
      <div className="aa">
        <h1>商品列表</h1>
        <div className="ding">0</div>
        <div>
          {shops !== undefined &&
            shops.map((item: any, index: number) => (
              <div className="shop" key={index}>
                {item.count > 0 ? (
                  <div>
                    <i>--</i>
                    <span>{item.count}</span>
                    <i>+</i>
                  </div>
                ) : (
                  <button onClick={this.changecount.bind(this)}>
                    加入购物车
                  </button>
                )}
                <span>{item.name}</span>
                <b>{item.price}元</b>
              </div>
            ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch({ type: "shop/getshoplist" });
  }
  changecount() {}
}

export default connect((store: any) => {
  return store;
})(shoplist);
