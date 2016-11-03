import React from "react";
import { Link } from "react-router";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <Link to="#kg" class="navbar-brand">
              <span class="glyphicon glyphicon-grain"></span> Kerry Grain
            </Link>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li><Link to="#values">VALUES</Link></li>
              <li><Link to="#services">SERVICES</Link></li>
              <li><Link to="#products">PRODUCTS</Link></li>
              <li><Link to="#contact">CONTACT</Link></li>
              <li><Link to="careers">CAREERS</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
