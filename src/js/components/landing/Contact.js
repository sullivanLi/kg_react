import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact" class="container-fluid bg-grey">
        <div class="row">
          <div class="col-sm-7">
            <h2 class="text-center">CONTACT INFORMATION</h2>
          </div>
          <div class="col-sm-5 text-left">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;604-777 Hornby St, Vancouver, BC</p>
            <p><span class="glyphicon glyphicon-phone"></span>&nbsp;+1 778 382-7894</p>
            <p><span class="glyphicon glyphicon-envelope"></span>&nbsp;info@kerrygrain.com</p>
          </div>
        </div>
      </div>
    );
  }
}
