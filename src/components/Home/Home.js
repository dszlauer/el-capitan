import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import video from "../../media/trimed_yosemite.mp4";
import "../Home/home.css";

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <video autoPlay muted loop className="background-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <NavLink to="/products">
          <button className="enter-btn">
            ENTER
            <br /> EL CAPITAN{" "}
          </button>
        </NavLink>
      </div>
    );
  }
}

export default Main;
