import React from "react";

export default class Job extends React.Component {
  render() {
    const { title, description, location, type } = this.props;

    return (
      <li class="list-group-item job-item">
        <div class="row">
          <div class="col-lg-6">
            <span class="job-title">{title}</span>
          </div>
          <div class="col-lg-6 job-addition">
            <span>{type}</span>
            <span class="glyphicon glyphicon-record job-badge" aria-hidden="true"></span>
            <span>{location}</span>
            <span class="glyphicon glyphicon-map-marker job-badge" aria-hidden="true"></span>
          </div>
        </div>
      </li>
    );
  }
}
