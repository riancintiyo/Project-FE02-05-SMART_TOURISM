import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { HeaderPage } from './components'
import { Home, Hotel } from "./pages";
import { BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter className="App">
        <HeaderPage />
        <Router>
        <Home path="/" />
        <Hotel path='/hotel'/>
        </Router>
      </BrowserRouter>
    );
  }

export default App;
