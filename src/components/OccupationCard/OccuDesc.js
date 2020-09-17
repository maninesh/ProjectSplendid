import React from 'react';
import PropTypes from 'prop-types';
import design from './occu.css';

const OccuDesc = ({ occ_code, occ_title, occ_desc, occ_crn, occ_core }) => {
  return (
    <li style={{backgroundColor: "#1c3f4f", marginTop:"50px",marginLeft:"10px", padding:"0px 40px 0px 40px"}} className={design.occupation_card} key={occ_code}>
      <div className={design.content}>
      <p className={design.occ_title} style={{marginBottom:"-10px"}}><b style={{color: "orange"}}>Occupation Title: </b><span>{occ_title}</span></p><br/>
      <p className={design.occ_title} style={{marginBottom:"-10px"}}><i><b style={{color: "orange"}}>Occupation Description: </b></i><span>{occ_desc}</span></p><br/>
      <p className={design.occ_title} style={{marginBottom:"-10px"}}><i><b style={{color: "orange"}}>Common Role Names: </b></i><span>{occ_crn}</span></p><br/>
      <p className={design.occ_title} style={{marginBottom:"-10px"}}><i><b style={{color: "orange"}}>Core Tasks: </b></i><span>{occ_core}</span></p><br/>
</div>
    </li>
  );
};

OccuDesc.propTypes = {
  occ_code: PropTypes.string,
  occ_title: PropTypes.string,
  occ_desc: PropTypes.string,
  occ_crn:PropTypes.string,
  occ_core:PropTypes.string,
};

export default OccuDesc;