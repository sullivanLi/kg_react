import React from "react";

export default class Value extends React.Component {
  render() {
    return (
      <div class="container-fluid bg-grey" id="values">
        <div class="row">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-globe logo"></span>
          </div>
          <div class="col-sm-8">
            <h2>Our Values</h2><br/>
            <h4>
              <p>Our business is that of meeting our client’s needs by exporting grain
              commodities like wheat, soybean, lentils, peas and so on efficiently, providing
              the best price advantage.</p>
              <p>We purchase our products from local producers and farmers in Canada.</p>
              <p>To serve high-quality service to our clients, we corporate with dependable 
              suppliers, secure financial institutions, and transportation companies.</p>
            </h4>
          </div>
        </div>
        <div class="gap-70"></div>
      </div>
    );
  }
}
