import React from 'react';
import PropTypes from 'prop-types';
import design from './OccupationCard.module.css';

const OccupationCard = ({ occ_code, occ_title}) => {
  return (
    <li className={design.occupation_card} key={occ_code}>
      <div className={design.content}>
        <h2 className={design.occ_title}>{occ_title}</h2>
        
      </div>
    </li>
  );
};

OccupationCard.propTypes = {
  occ_code: PropTypes.string,
  occ_title: PropTypes.string,
};

export default OccupationCard;
