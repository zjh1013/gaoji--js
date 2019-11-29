import React, { Component } from "react";
import { connect } from "dva"; //引入dva
import BScroll from "better-scroll"; //引入betterscroll
import axios from "axios"; //引入axios
import { detailface } from "../../type/type"; //引入定义的接口类型
let BSzuo: any = null;
let BSyou: any = null;
@connect((store: any) => {
  //connect函数
  return store;
})
class detail extends Component<any> {
  state: detailface = {
    //接口
    ind: 0,
    navlist: [],
    inds: 0
  };
  componentDidMount() {
    axios.get("/getnav").then(res => {
      this.setState({
        navlist: res.data.result
      });
    });
    BSzuo = new BScroll(".zuo", {
      //实例化左边
      click: true
    });
    BSyou = new BScroll(".you", {
      //实例化右边
      click: true
    });
    let num: any; //顶一个 num的值
    let arr = Object.values(this.refs);
    BSyou.on("scroll", (res: any) => {
      num = Math.abs(res.y);
      for (var i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
          this.setState({
            ind: i
          });
        }
      }
    });
    this.props.dispatch({ type: "food/getzuos" }); //获取左边的数据
    this.props.dispatch({ type: "food/getyous" }); //获取右边的数据
  }
  scrolls(index: number) {
    //点击事件
    BSyou.scrollToElement(Object.values(this.refs)[index], 500); //better-scroll事件
    this.setState({
      //更改state值
      ind: index
    });
  }
  aaaa(index: number) {
    //事件
    this.setState({
      inds: index
    });
  }
  del(id: number) {
    //删除事件
    axios.post("/delshop", { id }).then(res => {
      console.log(res);
    });
  }
  render() {
    //render函数
    let { ind, navlist, inds } = this.state;
    return (
      <div>
        <div className="nav">
          {navlist.map((item: any, index: number) => (
            <span
              key={index}
              className={inds === index ? "ac" : ""}
              onClick={this.aaaa.bind(this, index)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="da">
          <div className="zuo">
            <ul>
              {this.props.food.datazuo.map((item: any, index: number) => (
                <li
                  className={ind === index ? "ac" : ""}
                  onClick={this.scrolls.bind(this, index)}
                  key={index}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="ding" onClick={this.dingdan.bind(this)}>
            {this.props.food.totalprice}
          </div>
          <div className="you">
            <div>
              {this.props.food.datazuo.map((item: any, index: number) => (
                <div key={index} ref={`you` + index}>
                  <h2>{item.name}</h2>
                  {this.props.food.datayou.map((item1: any, index1: number) => (
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
                            <button onClick={this.subs.bind(this, item1.id)}>
                              --
                            </button>
                            {item1.count}
                            <button onClick={this.adds.bind(this, item1.id)}>
                              ++
                            </button>
                          </div>
                        ) : (
                          <button onClick={this.adds.bind(this, item1.id)}>
                            加入购物车
                          </button>
                        )}
                        <button onClick={this.del.bind(this, item1.id)}>
                          删除商品
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  adds(id: number) {
    //++的事件
    this.props.dispatch({ type: "food/add", id });
  }
  subs(id: number) {
    //--的事件
    this.props.dispatch({ type: "food/sub", id });
  }
  dingdan() {
    //跳转路由的事件
    this.props.push("dingdan");
  }
}
export default detail;
