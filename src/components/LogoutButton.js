import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

const LogoutButton = () => {
    return (
    <>
    <div class="dropdown">
    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" style={{float:"right", margin:"20px 0px 0px 0px"}}>
      Job Search
    </button>
    <div className="dropdown-menu">
      <Link to="./searchdesc" target="_blank" className="dropdown-item">Search Occupation title and description</Link>
    </div>
  </div>
    
    </>
    );
};
export default LogoutButton;
