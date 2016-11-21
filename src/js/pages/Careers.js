import React from "react";

import JobStore from "../stores/JobStore";
import Job from "../components/careers/Job";

export default class Careers extends React.Component {
  constructor() {
    super();
    let jobs = JobStore.fetch() || [];
    this.state = {
      jobs: jobs,
      title: this.getTitle(jobs.length),
    };
  }

  getTitle(length) {
    if ( length > 0 ) {
      return "We are hiring";
    } else {
      return "None of Jobs is Opened"
    }
  }

  render() {
    const { jobs, title } = this.state;

    const JobComponents = jobs.map((job) => {
      return <Job key={job.id} {...job}/>;
    });

    return (
      <div id="careers">
        <div class="image-with-text">
          <img src="img/career-bg.jpg"/>
          <div class="text">
            {this.state.title}
          </div>
        </div>
        <div class="container-fluid bg-grey">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <ul class="list-group job-list">
                {JobComponents}
              </ul>
            </div>
            <div class="gap-450"></div>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    JobStore.on("completed", () => {
      let jobs = JobStore.fetch();
      let title = this.getTitle(jobs.length);
      this.setState({
        jobs: jobs,
        title: title,
      });
    });
  }

  componentDidMount() {
    $('html, body').animate({ scrollTop: $("#careers").offset().top }, 900);
  }
}
