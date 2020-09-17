import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const ToggleButton = () => {
    return (
    <div className="container-fluid mx-0" style={{width:"25%"}}>
        <button className="btn dropdown-toggle border my-3" data-toggle="dropdown" style={{color:"white", float:"right"}}></button>
    <div className="dropdown-menu">
        <a className="dropdown-item" href=" ">Profile</a>
        <a className="dropdown-item" href=" ">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href=" ">Log out</a>
      
    </div>
    </div>
    );
};
export default ToggleButton;