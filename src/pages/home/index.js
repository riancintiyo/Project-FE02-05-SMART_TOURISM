import React, { Component } from "react";
import '../../App.css';
import { Hero, DatePickers } from "../../components";

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Hero />
        <DatePickers />
      </div>
    );
  }
}

export default Home;
