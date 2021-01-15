import React from 'react'
import './App.css';
import Header from './Components/Header'
import PlayerDashboard from './Components/PlayerDashboard'
import Setup from './Components/Setup'
import Unlockables from './Components/Unlockables'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AppProvider } from './utilities/DataContext';

function App() {
  return (

    <div className="App">
      <Router>
        <AppProvider>
          <Header />
          <Switch>
            <Route path="/game">
              <PlayerDashboard />
            </Route>
            <Route path="/setup">
              <Setup />
            </Route>
            <Route path="/unlockables">
              <Unlockables />
            </Route>
          </Switch>
          <Footer />
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;

//this is only a test from Anthony. Checking to see if the updtream works. 1/15
