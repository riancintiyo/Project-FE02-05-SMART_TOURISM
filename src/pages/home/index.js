import React, { Component } from "react";
import '../../App.css';
import { Hero, DatePickers } from "../../components";
import { HeaderPage } from '../../components'

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <HeaderPage/>
        <Hero />
        <DatePickers />
      </div>
    );
  }
}

export default Home;
