import React, { Component } from "react";
import { geticonlist } from "../../app/app";
import { iconface } from "../../constans/type";
export default class icon extends Component {
  state: iconface = {
    iconlist: []
  };
  public _geticonlist() {
    geticonlist().then(res => {
      this.setState({
        iconlist: res.data.result
      });
    });
  }
  public componentDidMount() {
    this._geticonlist();
  }
  render() {
    return (
      <div className="icon">
        {this.state.iconlist.map((item: any, index: number) => (
          <div className="d1" key={index}>
            <span className="s1"></span>
            <span className="s2">{item.iconText}</span>
          </div>
        ))}
      </div>
    );
  }
}
