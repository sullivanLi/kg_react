import React from "react";

export default class Career extends React.Component {
  render() {
    return (
      <div>
        <div class="image-with-text">
          <img src="img/bg-worldmap.jpg"/>
          <div class="map vancouver">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
            Vancouver
          </div>
        </div>
        <div class="container-fluid bg-grey">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="panel panel-contact">
                <div class="panel-heading">Vancouver Office</div>
                <div class="panel-body">
                  <span class="glyphicon glyphicon-phone"></span>
                  +1 778 382-7894
                  <hr/>
                  <span class="glyphicon glyphicon-envelope"></span>
                  info@kerrygrain.com
                  <hr/>
                  <span class="glyphicon glyphicon-map-marker"></span>
                  604-777 Hornby St, Vancouver, BC
                </div>
              </div>
            </div>
            <div class="col-xs-12 hidden-lg">
              <div class="gap-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
