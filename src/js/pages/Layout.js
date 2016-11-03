import React from "react";

import Navigation from "../components/shared/Navigation";
import Footer from "../components/shared/Footer";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
