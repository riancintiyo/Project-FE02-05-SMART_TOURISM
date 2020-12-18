import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Navbar } from './components'
import { Home, Hotel, RegistHotel } from "./pages";
import { BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter className="App">
        {/* <HeaderPage/> */}
        {/* <Navbar /> */}
        <Router>
        <Home path="/"/>
        <Hotel path='/hotel'/>
        <RegistHotel path='/registrasiHotel' />
        </Router>
      </BrowserRouter>
    );
  }

export default App;
