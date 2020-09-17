import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import OccuDescGrid from './components/OccupationGrid/OccuDescGrid';
import Occupations from './components/OccupationCard/occupations_list.json';
import SearchBar from './components/SearchBar/SearchBar';
import LogoutButton from './components/LogoutButton';
import {NavLink} from "react-router-dom";

class Searchdesc extends Component {
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
       <div className="container-fluid" style={{width:"95%",height:"80px", marginRight:"3%"}}>
      <div className="container" style={{width:"auto",height:"auto", float:"left"}}>
      <NavLink exact to="/" ><img src="./images/faethm.svg" alt="logo" style={{height:"65px", width:"65px"}}/></NavLink>
      </div>
      <LogoutButton/>
      </div>
      <div className="container" style={{margin:"0% 0% 3% 11.5%"}}>
                        <h2 style={{fontSize:"1.5rem"}}>Search for Occupation Title, Description, Role Name and Core Tasks</h2>
                    </div>
      <section className="Occupations">
        <SearchBar value={inputValue} onChange={this.searchInput} />
        <OccuDescGrid inputValue={inputValue} items={Occupations} />
      </section>
      </>
    );
  }
}

Searchdesc.propTypes = {
  inputValue: PropTypes.string,
};

export default Searchdesc;
