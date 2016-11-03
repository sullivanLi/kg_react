import React from "react";

export default class Careers extends React.Component {
  render() {
    return (
      <div id="careers" class="container-fluid white-font">
        <div class="gap-200"></div>
        <h1 class="white-font text-center">None of Jobs is Oponed</h1>
        <div class="gap-450"></div>
      </div>
    );
  }

  componentDidMount() {
    $('html, body').animate({ scrollTop: $("#careers").offset().top }, 900);
  }
}
