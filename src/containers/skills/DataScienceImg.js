import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require("./js.jpg")} alt=""/>
    );
  }
}
