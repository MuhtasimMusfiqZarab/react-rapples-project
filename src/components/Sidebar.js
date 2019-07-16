import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "./Sidebar.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons' 

class SideBar extends Component {
  
  state={
  isOpen: false
}
    toggleOpen = () =>
        this.setState(
            { isOpen: true },
            document.addEventListener("click", this.handleCloseOutside)
        );

    handleCloseOutside = () => {
        this.setState(
            { isOpen: false },
            document.removeEventListener("click", this.handleCloseOutside)
        );
    };


    render() {
        const dropdownMenuShow = `dropdown-menu custom-dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <nav className="sidebar"> 
                     <FontAwesomeIcon icon={faBars} size="2x"
             className="dismiss-icon" onClick={this.toggleOpen} />
            
            <ul className="list-unstyled sidebar-ul">
                <li className=" dropdown dropright">
                    <div className={dropdownMenuShow}
                         aria-labelledby="navbarDropdown">
                        <div className="dropdown-item dropdown-item-title disable-title">
                           Options
                        </div>
                        
                    </div>
                    </li>
            </ul>
        </nav>

        );
    }
}
export default SideBar;

// <Link to="" className="dropdown-item">
//                         Trade 1
//                         </Link>
//                         <Link to=""  className="dropdown-item">
//                         Trade
//                         </Link>