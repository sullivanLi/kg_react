import React from "react";

export default class ServiceItem extends React.Component {
  render() {
    return (
      <div class="col-sm-4">
        <span class={"glyphicon " + this.props.icon + " logo-small"}></span>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}
