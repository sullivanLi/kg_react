import React from "react";
import Item from "./ServiceItem"

export default class Services extends React.Component {
  render() {
    return (
      <div id="services" class="container-fluid text-center bg-grey">
        <h2>Our Services</h2>
        <br/>
        <div class="row">
          <Item icon="glyphicon-transfer" title="Online Grain Trading Platform" />
          <Item icon="glyphicon-cutlery" title="Grain, Food Supply chain Management" />
          <Item icon="glyphicon-lock" title="Agricultural Financial Solution Services" />
        </div>
        <br/><br/>
        <div class="row">
          <Item icon="glyphicon-refresh" title="Agricultural Mergers and Acquisitions" />
          <Item icon="glyphicon-usd" title="Investment Banking Services" />
          <Item icon="glyphicon-tree-deciduous" title="Investment in Agricultural land" />
        </div>
      </div>
    );
  }
}
