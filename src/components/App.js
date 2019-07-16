import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from "react-router-dom";
import './App.css';
import TradingView from './TradingView';
import Sidebar from './Sidebar';
import NavBar from './NavBar';


function App() {
  return (
        <div>
        <NavBar/>
        <TradingView/> 
          </div>
  );
}

export default App;


                //   <Switch>
                //     <Route path="/" component={} exact/>
                // </Switch>