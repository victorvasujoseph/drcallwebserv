import React, { Component } from "react";
import { footer } from "react-bootstrap";

class NavTab extends Component {
  render() {
    return (
      <footer id="main-footer" class="text-center p-4">
        <div class="container">
          <div class="row">
            <div class="col">
              <p>
                Copyright &copy;
                <span id="owner"></span> Jan & Victor
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default NavTab;
