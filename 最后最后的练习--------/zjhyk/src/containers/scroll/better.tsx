import React, { Component } from "react";
import Bscroll from "better-scroll";
import { connect } from "dva";
let BSzuo: any = null;
let BSyou: any = null;
@connect((store: any) => {
  return store;
})
class better extends Component<any> {
  state = {
    ind: 0
  };
  componentDidMount() {
    this.props.dispatch({ type: "scroll/getzuolist" });
    this.props.dispatch({ type: "scroll/getyoulist" });

    BSzuo = new Bscroll(".zuo", {
      click: true
    });
    BSyou = new Bscroll(".you", {
      probeType: 2
    });
    let num: any;
    let arr: any = Object.values(this.refs);
    BSyou.on("scroll", (res: any) => {
      num = Math.abs(res.y);
      for (var i = 0; i < arr.length; i++) {
        if (num > arr[i].offsetTop) {
          this.setState({
            ind: i
          });
        }
      }
    });
  }
  aaa(index: number) {
    BSyou.scrollToElement(Object.values(this.refs)[index], 500);
    this.setState({
      ind: index
    });
  }
  render() {
    let { ind } = this.state;
    return (
      <div>
        <div className="da">
          <div className="zuo">
            <ul>
              {this.props.scroll.zuolist.map((item: any, index: number) => (
                <li
                  key={item.id}
                  className={ind === index ? "ac" : ""}
                  onClick={this.aaa.bind(this, index)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="you">
            <div>
              {this.props.scroll.zuolist.map((item: any, index: number) => (
                <div key={index} ref={`you` + index}>
                  <h2>{item.name}</h2>
                  {this.props.scroll.youlist.map(
                    (item1: any, index1: number) => (
                      <div key={index1} className="city">
                        <p>{item1.title}</p>
                        <p>{item1.qian}</p>
                        {item1.count >= 1 ? (
                          <div>
                            <button onClick={this.sub.bind(this, item1.id)}>
                              --
                            </button>
                            {item1.count}
                            <button onClick={this.gw.bind(this, item1.id)}>
                              ++
                            </button>
                          </div>
                        ) : (
                          <button onClick={this.gw.bind(this, item1.id)}>
                            加入购物车
                          </button>
                        )}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ding" onClick={this.xq.bind(this)}>
          {this.props.scroll.youcar.length}
        </div>
      </div>
    );
  }
  gw(id: number) {
    this.props.dispatch({ type: "scroll/add", id });
  }
  sub(id: number) {
    this.props.dispatch({ type: "scroll/sub", id });
  }
  xq() {
    this.props.push("bettercar");
  }
}

export default better;
