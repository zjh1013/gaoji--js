import React, { Component } from "react";
export default class header extends Component<any> {
  static defaultProps = {
    title: "猫眼电影",
    back: "false"
  };
  render() {
    let { title, back } = this.props;
    return (
      <header>
        {back ? <span>&lt;</span> : null}
        <span>{title}</span>
      </header>
    );
  }
}
