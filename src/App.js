import React from 'react'
import './App.css';
import Header from './Components/Header'
import PlayerDashboard from './Components/PlayerDashboard'
//import Setup from './Components/Setup'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/game">
            <PlayerDashboard />
          </Route>
          {/* <Route path="/setup">
            <Setup />
          </Route> */}
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
