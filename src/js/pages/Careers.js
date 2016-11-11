import React from "react";

import JobStore from "../stores/JobStore";
import Job from "../components/careers/Job";

export default class Careers extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: JobStore.fetch(),
    }
  }

  render() {
    const { jobs } = this.state;
    let title;

    if ( jobs.length !== 0 ) {
      title = "We are hiring";
    } else {
      title = "None of Jobs is Opened"
    }

    const JobComponents = jobs.map((job) => {
      return <Job key={job.id} {...job}/>;
    });

    return (
      <div>
        <div id="careers" class="container-fluid white-font">
          <div class="gap-200"></div>
          <h1 class="white-font text-center">{title}</h1>
          <div class="gap-200"></div>
        </div>
        <div class="container-fluid bg-grey">
          <div class="row">
            <div class="col-lg-4 center-block">
              <img src="img/career.jpg" class="img-responsive" />
              <br/>
            </div>
            <div class="col-lg-6 col-lg-offset-1">
              <ul class="list-group job-list">
                {JobComponents}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $('html, body').animate({ scrollTop: $("#careers").offset().top }, 900);
  }
}
