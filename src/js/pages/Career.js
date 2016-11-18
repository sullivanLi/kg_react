import React from "react";

import JobStore from "../stores/JobStore";
import Detail from "../components/career/Detail";

export default class Career extends React.Component {
  render() {
    const job = JobStore.fetchById(this.props.params.id);
    const desc = { __html: job.description };
    const DetailComponents = job.details.map((detail, index) => {
      return <Detail key={index} {...detail}/>;
    });
    const summary = { __html: job.summary };

    return (
      <div id="careers">
        <div class="image-with-text">
          <img src="../img/career-bg.jpg"/>
          <div class="text">
            we are hiring
          </div>
        </div>
        <div class="container-fluid bg-grey job">
          <div class="row">
            <div class="col-lg-12 job-title">
              {job.title}
            </div>
            <div class="col-lg-8 col-lg-offset-2" dangerouslySetInnerHTML={desc} />
            <div class="col-lg-8 col-lg-offset-2">
              <br/>
              {DetailComponents}
              <br/>
            </div>
            <div class="col-lg-8 col-lg-offset-2" dangerouslySetInnerHTML={summary} />
          </div>
        </div>
      </div>
    );
  }
}
