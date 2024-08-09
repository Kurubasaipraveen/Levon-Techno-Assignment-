import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
   
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className='dash'>
            <h1>Overview</h1>
            <Dashboard/>
          </div>
        </div>
      
    </div>
  );
}

export default App;
