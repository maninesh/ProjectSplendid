import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import BackButton from "./BackButton";
import ContinueButton from "./ContinueButton";


const Footer = (props) => {
    return(
        <div className="row" style={{height:"100px", marginTop:"30px", backgroundColor:"#1a2e3f", alignItems:"center"}}>
        <BackButton
            back= {props.backlink}
        />
        <ContinueButton
            continue = {props.contlink}
        />
    </div>
        );
};
export default Footer;