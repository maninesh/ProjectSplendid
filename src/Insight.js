import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import UploadTopBar from "./components/UploadTopBar";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import { CSVLink} from "react-csv";

class Insight extends Component {
  state = {
    inputValue: '',
  };

  searchInput = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { inputValue } = this.state; 
    
     const {newdata} = this.props.location;
    
    return (
      
      <>
      
      
      
     <div className="container-fluid">
            <div className="row">
            <div className="container-fluid" style={{width:"95%",height:"80px", marginRight:"3%", marginBottom:"-6%"}}>
      <div className="container" style={{width:"auto",height:"auto", float:"left"}}>
      <NavLink exact to="/"><img src="./images/faethm.svg" alt="logo" style={{height:"65px", width:"65px"}}/></NavLink>
      </div>
     
      </div>
      <div className="col-1" style={{width:"1%", marginRight:"4%"}}>
                    
                    
                    </div>
                <div className="col-10">
                    <div className="container-fluid" style={{height:"80px"}}>
                        
                    </div>
                    <div className="container-fluid" style={{marginBottom:"40px"}}>
                        <h1>Insights Ready</h1>
                    </div>
                    <UploadTopBar
                      imagesrc1 ="./images/tick.png"
                      imagesrc2 ="./images/tick.png"
                      imagesrc3 ="./images/tick.png"
                      imagesrc4 ="./images/tick.png"
                      imagesrc5 ="./images/5a.png"
                    />
                    

                 </div>
                
            </div>
    
            </div>
            <div className="container">
                        <h1 style={{margin:"2% 0 0 30%"}}>Ready to download your final report?</h1>
                    </div>
      
      <CSVLink data={newdata} className="btn bg-primary" style={{marginLeft:"44%", marginTop:"2%", marginBottom:"8.8%", color:"white"}}>Download Data File</CSVLink>

      <div className="container-fluid" style={{height:"100px", marginTop:"30px", backgroundColor:"#1a2e3f", alignItems:"center"}}>
      <Link to="./job_matching" className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", textAlign:"center", marginLeft:"4%", marginTop:"2%"}}>Back</Link>
        
    </div>
      </>
    );
  }
}

Insight.propTypes = {
  inputValue: PropTypes.string,
};

export default Insight;
