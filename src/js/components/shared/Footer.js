import React from "react";

export default class Value extends React.Component {
  render() {
    return (
      <div class="container-fluid bg-grey">
        <footer class="container-fluid text-center">
          <a href="#kg" title="To Top">
            <span class="glyphicon glyphicon-chevron-up"></span>
          </a>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    $("footer a[href='#kg']").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: $('#kg').offset().top}, 1300);
    });
  }
}
