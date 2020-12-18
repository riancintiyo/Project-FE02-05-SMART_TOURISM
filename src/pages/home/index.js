import React, { Component } from "react";
import '../../App.css';
import { Hero, DatePickers, Footer } from "../../components";

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Hero />
        <DatePickers />
        <Footer />
      </div>
    );
  }
}

export default Home;
