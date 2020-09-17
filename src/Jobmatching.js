import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import PredictionGrid from './components/OccupationGrid/PredictionGrid';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Occupations from './components/OccupationCard/model_results.json';
import SearchBar from './components/SearchBar/SearchBar';
import LogoutButton from './components/LogoutButton';
import UploadTopBar from "./components/UploadTopBar";
import {NavLink} from "react-router-dom";

class Jobmatching extends Component {
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
    return (
      <>
     <div className="container-fluid">
            <div className="row">
            <div className="container-fluid" style={{width:"95%",height:"80px", marginRight:"3%", marginBottom:"-6%"}}>
      <div className="container" style={{width:"auto",height:"auto", float:"left"}}>
      <NavLink to="/" ><img src="./images/faethm.svg" alt="logo" style={{height:"65px", width:"65px"}}/></NavLink>
      </div>
     
      </div>
      <div className="col-1" style={{width:"1%", marginRight:"4%"}}>
                    
                    
                    </div>
                <div className="col-10">
                    <div className="container-fluid" style={{height:"80px"}}>
                        <LogoutButton/>
                    </div>
                    <div className="container-fluid" style={{marginBottom:"40px"}}>
                        <h1>Job Matching</h1>
                    </div>
                    <UploadTopBar
                      imagesrc1 ="./images/tick.png"
                      imagesrc2 ="./images/tick.png"
                      imagesrc3 ="./images/tick.png"
                      imagesrc4 ="./images/4a.png"
                      imagesrc5 ="./images/5b.png"
                    />
                    

                 </div>
                
            </div>
    
            </div>
            <div className="container" style={{marginLeft:"11.4%"}}>
              <h1 style={{marginBottom:"2%", marginLeft:"1%"}}><b>Index</b></h1>
              <p style={{marginLeft:"1%"}}>High: <div style={{display:"Inline", marginRight:"1%", backgroundColor:"#b30000"}} className="container border"></div>
                 Medium: <div style={{display:"Inline", marginRight:"1%", marginLeft:"0.5%", backgroundColor:"#006600"}} className="container border"></div>
                 Low: <div style={{display:"Inline", marginRight:"1%", marginLeft:"0.5%", backgroundColor:"#265A87"}} className="container border"></div>
              </p>
            </div>
      <section className="Occupations">
        <SearchBar value={inputValue} onChange={this.searchInput} />
        <PredictionGrid inputValue={inputValue} items={Occupations} />
      </section>
      
      </>
    );
  }
}

Jobmatching.propTypes = {
  inputValue: PropTypes.string,
};

export default Jobmatching;
