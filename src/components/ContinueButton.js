import React from "react";
import {Link} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const ContinueButton = (props) => {
    return(
<Link to={props.continue} className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", marginLeft:"77%"}}>Continue</Link>
    );
};
export default ContinueButton;