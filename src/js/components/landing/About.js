import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div id="about" class="container-fluid white-font">
        <div class="text-center">
          <img src="img/logo-w1.png" alt="Logo" class="brand" />
        </div>
        <div class="gap-70"></div>
        <div class="row">
          <div class="col-sm-12">
            <div class="banner_Over_Box">
              <h2 class="white-font">About Company</h2>
              <h4 class="white-font">
                <p>Kerry Grain Holdings Inc, located in Vancouver, B.C, Canada, was established 
                in 2015 as an export company specialized in grain commodities.</p>
                <p>We are an entrepreneurial trading company that connects agricultural producers of
                especially Canada and U.S.A with our clients over the world. We build and maintain 
                solid relationships and believe that our clients and our teamare critical 
                to our success.</p>
                <p>In the changeable situation of grain industry, 
                we will continue to challenge to entry 
                new markets to increase client and stakeholder value.</p>
              </h4>
            </div>
          </div>
        </div>
        <div class="gap-450"></div>
      </div>
    );
  }
}
