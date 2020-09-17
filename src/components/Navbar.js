import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return(
    <div className="container-fluid mx-0" style={{width:"15%"}}>
  <ul className="nav flex-column" style={{textAlign:"left",width:"10%"}}>
    <li className="nav-item">
    <NavLink exact to="/" className="nav-link"><img src="./images/faethm.svg" alt="logo" style={{height:"35px", width:"35px"}}/></NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/about" className="nav-link"><img src="./images/Icon2.png" alt="Icon" style={{height:"30px", width:"30px"}}/></NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/contact" className="nav-link"><img src="./images/Icon3.png" alt="Icon" style={{height:"30px", width:"30px"}}/></NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/icon4" className="nav-link"><img src="./images/Icon4.png" alt="Icon" style={{height:"32px", width:"32px"}}/></NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/icon5" className="nav-link" style={{marginBottom:'18px'}}><img src="./images/Icon5.png" alt="Icon" style={{height:"35px", width:"30px"}}/></NavLink>
    </li>
    
  </ul>
  </div>

  );
};
export default Navbar;