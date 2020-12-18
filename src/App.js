import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from './components/pagination/Table';
import Registration from './pages/Registration';
import Home from './pages/home';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/registration' component={Registration} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
