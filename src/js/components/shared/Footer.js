import React from "react";

export default class Value extends React.Component {
  render() {
    return (
      <footer class="text-center">
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <img src="img/logo-w1.png" alt="Logo" class="footer-logo" />
                Kerry Grain © 2016
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  componentDidMount() {
    $("footer a[href='#kg']").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: $('#kg').offset().top}, 1300);
    });
  }
}
