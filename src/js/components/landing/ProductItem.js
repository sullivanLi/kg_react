import React from "react";

export default class ProductItem extends React.Component {
  render() {
    return (
      <div class="col-md-4">
        <div class="thumbnail">
          <img src={this.props.src} alt={this.props.name} width="400" height="300" />
          <p><strong>{this.props.name}</strong></p>
        </div>
      </div>
    );
  }
}
