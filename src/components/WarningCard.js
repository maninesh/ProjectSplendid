import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const WarningCard = (props) => {
    return (
        <>
    <div className={props.classname} style={{width:"100%", color:"white"}}>
      <div className="card-header">
        <a className="card-link" data-toggle="collapse" href={props.link} style={{textDecoration:"none", color:"white"}}>
            {props.title}
        </a>
      </div>
      <div id={props.id} className="collapse" data-parent="#accordion">
        <div className="card-body">
            {props.body}
        </div>
      </div>
      </div>
    
        </>
    );
};
export default WarningCard;