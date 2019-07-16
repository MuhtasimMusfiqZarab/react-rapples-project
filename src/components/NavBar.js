import React, { Component } from 'react';
import "./Nav.scss";

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="custom navbar-brand mb-0 h1">Rapples Entertainment Ltd</span>
      </nav>
     );
  }
}

export default NavBar;