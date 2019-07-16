import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Switch, Route} from "react-router-dom";
import './App.css';
import TradingView from './TradingView';
import SideBar from './SideBar';
import NavBar from './NavBar';


function App() {
  return (
        <div>
           <NavBar/>
           <SideBar/>
           <TradingView/> 
          </div>
  );
}

export default App;
