import React from "react";
import {Link} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const BackButton = (props) => {
    return(
<Link to={props.back} className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", textAlign:"center", marginLeft:"4%"}}>Back</Link>
    );
};
export default BackButton;