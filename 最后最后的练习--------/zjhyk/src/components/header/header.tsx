import React, { Component } from "react";

export default class header extends Component<any> {
  render() {
    let { back, title } = this.props;
    return (
      <div className="header">
        {back ? <span>＜</span> : null}
        <h2>{title}</h2>
      </div>
    );
  }
}
