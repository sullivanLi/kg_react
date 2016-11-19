import React from "react";

import About from "../components/landing/About";
import Value from "../components/landing/Value";
import Gallery from "../components/landing/Gallery";
import Services from "../components/landing/Services";
import Products from "../components/landing/Products";

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Value />
        <Gallery />
        <Services />
        <Products />
      </div>
    ); 
  }

  componentDidMount() { 
    if( location.hash !== "" ) {
      this.stickWith(location.hash);
    }
    let _this = this;
    $(".navbar a").on('click', function(event) {
      if( this.href.indexOf("#") !== -1 ){
        let id = "#" + (this.href).split("#")[1];
        _this.stickWith(id);
      }
    });
  }

  componentWillUnmount() {
    $(".navbar a").off('click');
  }

  stickWith(id) {
    $('html, body').animate({ scrollTop: $(id).offset().top }, 900);
  }
}
