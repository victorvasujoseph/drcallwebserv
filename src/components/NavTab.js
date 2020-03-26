import React, { Component } from "react";
import { Navbar, div } from "react-bootstrap";

class NavTab extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <div class="container">
          <a href="index.html" class="navbar-brand">
            <b>D</b>oc<b>O</b>n<b>C</b>all
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="/" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a href="services.html" class="nav-link">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="blog.html" class="nav-link">
                  Appointments
                </a>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default NavTab;
