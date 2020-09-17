import React from 'react';
import DataUploadCard from "../components/DataUploadCard";
import CardData from "../components/CardData";
import {Link} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./home.css";
import {NavLink} from "react-router-dom";

let head1 = "Welcome to Faethm";
let para1= "Faethm provides clients with workforce automation insights through predictive scenario modelling. These insights can be used alongside company context to inform and enable stratefic workforce and technology implementation decisions.";
let head2 = "DATA UPLOAD OVERVIEW";
let para3 = "Ready to start? Remember you can save and come back to it any time.";
let para4 = "Start data upload process";

const Home = () => {
    return (
        <>
      <div className="container-fluid" style={{width:"95%",height:"80px", marginRight:"3%"}}>
      <div className="container" style={{width:"auto",height:"auto", float:"left"}}>
      <NavLink exact to="/"><img src="./images/faethm.svg" alt="logo" style={{height:"65px", width:"65px"}}/></NavLink>
      </div>
     
      </div>
    <div className="container-fluid" style={{marginLeft:"15.5%", marginBottom:"3%", width:"55%"}}>
    <h1>{head1}</h1>
    <p1>{para1}</p1>
    </div>
    
    <div className="container-fluid" style={{marginLeft:"15.5%", width:"auto"}}>
    <h2>{head2}</h2>
    </div>
    <div className="container-fluid" style={{marginLeft:"15.5%", display:"flex", flexWrap:"wrap", width:"auto"}}>
    {CardData.map(function ncard(val){
        return (
            <DataUploadCard
            key = {val.id}
                imgsrc = {val.imgsrc}
                head={val.head}
                body = {val.body}
                link = {val.link}
            />
        );
    })}
    </div>
    <div className="container-fluid" style={{height:"200px", marginLeft:"15.5%", marginTop:"40px", width:"auto"}}>
    <h2>{para3}</h2>  
<Link to="./data_requirement" className="btn btn-primary">{para4}</Link>
    </div>
    </>
    );
};
export default Home;