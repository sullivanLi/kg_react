import React from "react";

import JobStore from "../stores/JobStore";
import Job from "../components/careers/Job";

export default class Careers extends React.Component {
  render() {
    const jobs = JobStore.fetch();
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
      <div id="careers">
        <div class="image-with-text">
          <img src="img/career-bg.jpg"/>
          <div class="text">
            {title}
          </div>
        </div>
        <div class="container-fluid bg-grey">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <ul class="list-group job-list">
                {JobComponents}
              </ul>
            </div>
            <div class="col-xs-12 hidden-lg">
              <div class="gap-200"></div>
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
