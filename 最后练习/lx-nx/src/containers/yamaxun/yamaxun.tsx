import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BScroll from "better-scroll";
import { connect } from "dva";
import axios from "axios";
let leftBS: any = null;
let rightBS: any = null;
@connect((store: any) => {
  return store;
})
export default class yamaxun extends Component<any> {
  state = {
    ind: 0,
    list: [
      {
        name: "蔬菜",
        data: [
          {
            title: "白菜",
            qian: 12,
            count: 0
          },
          {
            title: "土豆",
            qian: 12,
            count: 0
          },
          {
            title: "萝卜",
            qian: 12,
            count: 0
          },
          {
            title: "茄子",
            qian: 12,
            count: 0
          },
          {
            title: "香菜",
            qian: 12,
            count: 0
          }
        ]
      },
      {
        name: "水果",
        data: [
          {
            title: "橘子",
            qian: 12,
            count: 0
          },
          {
            title: "橙子",
            qian: 12,
            count: 0
          },
          {
            title: "西瓜",
            qian: 12,
            count: 1
          },
          {
            title: "葡萄",
            qian: 12,
            count: 0
          },
          {
            title: "菠萝",
            qian: 12,
            count: 0
          }
        ]
      },
      {
        name: "手机",
        data: [
          {
            title: "小米",
            qian: 12,
            count: 0
          },
          {
            title: "华为",
            qian: 12,
            count: 0
          },
          {
            title: "苹果",
            qian: 12,
            count: 0
          },
          {
            title: "oppo",
            qian: 12,
            count: 0
          },
          {
            title: "vivo",
            qian: 12,
            count: 0
          },
          {
            title: "联想",
            qian: 12,
            count: 0
          },
          {
            title: "1+6",
            qian: 12,
            count: 0
          },
          {
            title: "三星",
            qian: 12,
            count: 0
          },
          {
            title: "荣耀",
            qian: 12,
            count: 0
          }
        ]
      }
    ],
    scrolly: 0
  };
  async componentDidMount() {
    await this.props.dispatch({ type: "ymx/getymxzuo" });
    await this.props.dispatch({ type: "ymx/getymxyou" });

    // let x = [];
    // for (let i = 0; i < this.props.ymx.ymxzuo.length; i++) {
    //   x = [];
    //   for (let j = 0; j < this.props.ymx.ymxyou.length; j++) {
    //     if (this.props.ymx.ymxzuo[i].id === this.props.ymx.ymxyou[j].type) {
    //       x.push(this.props.ymx.ymxyou[j]);
    //     }
    //   }
    //   this.props.ymx.ymxzuo[i].children = x;
    // }

    leftBS = new BScroll(".zuo", {
      click: true
    });
    rightBS = new BScroll(".you", {
      probeType: 2
    });
    let num: any;
    let arr: any = Object.values(this.refs);
    rightBS.on("scroll", (res: any) => {
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
  scrolls(index: number) {
    this.setState({
      ind: index
    });
    rightBS.scrollToElement(Object.values(this.refs)[index], 500);
  }
  // gotoshopcar() {
  //   this.props.push("shopcar");
  // }
  render() {
    let { list, ind } = this.state;
    let yous = this.props.ymx.ymxyou;
    let lists = this.props.ymx.ymxzuo;
    console.log();
    return (
      <div>
        <Header back={false} title="亚马逊"></Header>
        <div className="yamaxun">
          <div className="zuo">
            <ul>
              {lists.map((item: any, index: number) => (
                <li
                  className={ind === index ? "yama" : ""}
                  key={index}
                  onClick={this.scrolls.bind(this, index)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="you">
            <div>
              {lists.map((item: any, index: number) => (
                <h2 key={index} ref={`you` + index}>
                  {item.name}
                  {yous.map((item1: any, index1: number) => (
                    <div key={index1}>
                      <p>{item1.title}</p>
                      <i>{item1.qian}:元</i>
                      {item1.count >= 1 ? (
                        <>
                          <button
                            onClick={this.jianjian.bind(
                              this,
                              item1.count,
                              item1.id
                            )}
                          >
                            --
                          </button>
                          {item1.count}
                          <button
                            onClick={this.jiajia.bind(
                              this,
                              item1.count,
                              item1.id,
                              item1.qian,
                              item1.title
                            )}
                          >
                            +
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={this.gotoshopcar.bind(
                            this,
                            item1.count,
                            item1.id,
                            item1.qian,
                            item1.title
                          )}
                        >
                          加入购物车
                        </button>
                      )}
                    </div>
                  ))}
                </h2>
              ))}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
  gotoshopcar(count: number, id: number, qian: any, title: any) {
    this.props.dispatch({ type: "ymx/addcount", obj: { count, id } });
    count++;
    axios
      .post("/addshopcar", {
        title,
        qian,
        count
      })
      .then(res => {
        console.log(res);
      });
  }
  jiajia(count: number, id: number, qian: any, title: any) {
    this.props.dispatch({ type: "ymx/addcount", obj: { count, id } });
  }
  jianjian(count: number, id: number) {
    count--;
    axios.post("/jianjian", { count, id }).then(res => {
      console.log(res);
    });
  }
}
