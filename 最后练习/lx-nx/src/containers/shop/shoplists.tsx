import React, { Component } from "react";
import axios from "axios";
export default class shoplist extends Component<any> {
  state = {
    shoplist: [],
    count: 0
  };
  render() {
    let { shoplist } = this.state;
    return (
      <div>
        {shoplist.map((item: any, index: number) => (
          <div className="aa1" key={index}>
            <p>{item.name}</p>
            <p>{item.price}:元</p>
            <button onClick={this.gotogouwuche.bind(this, item)}>
              加入购物车
            </button>
            {/* <div>
              <button>-</button>
              <b>{item.count}</b>
              <button onClick={this.jiajia.bind(this, item.id)}>+</button>
            </div> */}
          </div>
        ))}
      </div>
    );
  }
  gotogouwuche(item: any) {
    axios
      .post("/addshop", {
        name: item.name,
        price: item.price,
        count: item.count
      })
      .then(res => {
        console.log(res);
      });
    this.props.push("/shopcar");
  }
  jiajia() {}
  componentDidMount() {
    this.updata();
    // console.log(this.props);
  }
  updata() {
    axios.get("/getshoplist").then(res => {
      this.setState({
        shoplist: res.data.result
      });
    });
  }
}
