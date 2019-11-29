import React, { Component } from "react";
import { connect } from "dva";
@connect((store: any) => {
  return store;
})
class icon extends Component<any> {
  render() {
    return (
      <div className="icon">
        {this.props.icon.datas.map((item: any, index: number) => (
          <div className="icon-item" key={item.id}>
            <span className="s1">
              <img src={item.iconUrl} alt="" />
            </span>
            <span className="s2">{item.iconTxt}</span>
          </div>
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch({ type: "icon/geticonlist" });
  }
}
export default icon;
