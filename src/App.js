import React from 'react'
import Login from './Components/Login'
import './App.css';


function App() {
  const [currentPage, setCurrenPage] = ('login')
  return (
    <div className="App">
    <div className="container">
    {currentPage === 'login' &&
        <Login />
    }
    </div>    
    </div>
  );
}

export default App;
