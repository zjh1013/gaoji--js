import React, { Component } from "react";
import axios from "axios";
import { listface } from "../../constans/type";
// import { connect } from "dva";
export default class list extends Component {
  state: listface = {
    list: [],
    pageSize: 1
  };
  _getlist(pageSize: number = this.state.pageSize, pageCount: number = 3) {
    axios.post("/getnewslist", { pageSize, pageCount }).then(res => {
      this.setState({
        // list: [...this.state.list, ...res.data.result]
        list: res.data.result
      });
    });
  }
  componentDidMount() {
    this._getlist();
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((item: any, index: number) => (
          <div className="news" key={index}>
            <div className="newsshang">
              <p>{item.title}</p>
            </div>
            <div className="newsxia">
              <div className="imgdiv">
                <img src={item.img} alt="" />
              </div>
              <div className="textdiv"></div>
            </div>
          </div>
        ))}
        <button onClick={this.loaddddd.bind(this)}>更多</button>
      </div>
    );
  }
  loaddddd() {
    this.setState(
      {
        pageSize: this.state.pageSize + 1
      },
      () => {
        this._getlist(this.state.pageSize);
      }
    );
  }
}
