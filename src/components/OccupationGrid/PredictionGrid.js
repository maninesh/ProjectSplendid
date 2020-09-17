import React from 'react';
import PropTypes from 'prop-types';
import design from './Occupationgrid.module.css';
import Prediction from '../OccupationCard/Prediction';
import { connect } from 'react-redux';
import Occupations from '../OccupationCard/occupations_list.json';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";


const PredictionGrid = ({inputValue, ...props }) => {
  const [state, setState] = React.useState({
    json_data: []
  })

  const newdata = [];

  // console.log(props.rows);
  var items = props.rows.slice(1);
  // console.log(items[0]);

  const handlePredictionChange = (itemId, value) => {
    // console.log(item[0], item[item.length - 1].newPrediction)
    items = items.map(item => {
      if (item[0] === itemId) {
        const occupation = Occupations.filter(occ => occ.occ_title === value)[0];
        const temp = item.slice(0, 23);
        temp.push.apply(temp, [value,occupation.occ_code, occupation.occ_title, occupation.occ_desc]);
        // console.log(temp);
        return temp;
      } else {
        return item
      }
    }
    )
    // console.log(items); 
  }

  const finalData=()=>{
    var json_data = [];
  for(let a=0;a<items.length;a++){
  json_data.push({
      "role_name": items[a][0],
      "role_description": items[a][1],
      "role_description": items[a][2],
      "role_family": items[a][3],
      "org_level_1": items[a][4],
      "org_level_2": items[a][5],
      "org_level_3": items[a][6],
      "pred_title_1": items[a][7],
      "pred_title_2": items[a][8],
      "pred_title_3": items[a][9],
      "pred_title_4": items[a][10],
      "pred_title_5": items[a][11],
      "pred_title_6": items[a][12],
      "pred_title_7": items[a][13],
      "pred_title_8": items[a][14],
      "pred_title_9": items[a][15],
      "pred_title_10": items[a][16],
      "compo_bracket": items[a][17],
      "total_fte": items[a][18],
      "has_reports_ratio": items[a][19],
      "has_mgr_reports_ratio": items[a][20],
      "confidence": items[a][21],
      "Review Required": items[a][22],
      "Predicted Occ Name": items[a][23],
      "Selected Occ Code": items[a][24],
      "Selected Occ Name": items[a][25],
      "Occ Description": items[a][26]     
    })
  }
  setState({json_data: json_data});
}

  const invalidSearch = 'Sorry! Keywords NOT FOUND';
  return (
    <React.Fragment>
    <ul className={design.occupation_grid}>
      {items.filter(item =>
        (item[0].toLowerCase().includes(inputValue.toLowerCase()),
        item[21].toLowerCase().includes(inputValue.toLowerCase())
        ||item[1].toLowerCase().includes(inputValue.toLowerCase())))
        .length > 0 ? (
        items
          .filter(item =>
            (item[0].toLowerCase().includes(inputValue.toLowerCase()),
            item[21].toLowerCase().includes(inputValue.toLowerCase())
            ||item[1].toLowerCase().includes(inputValue.toLowerCase()))
          )
          .map(item => (
            <Prediction
              key={item[0]}
              pred_title_1={item[7]}
              pred_title_2={item[8]}
              pred_title_3={item[9]}
              pred_title_4={item[10]}
              pred_title_5={item[11]}
              pred_title_6={item[12]}
              pred_title_7={item[13]}
              pred_title_8={item[14]}
              pred_title_9={item[15]}
              pred_title_10={item[16]}
              role_name={item[0]}
              recommended_title={item[1]}
              org_level_1={item[4]}
              compo_bracket={item[17]}
              total_fte={item[18]}
              confidence={item[21]}
              handlePredictionChange={handlePredictionChange}
            />

          ))
      )
       : (
        <li style={{color:"orange", marginLeft:"38%"}}>{invalidSearch}</li>)
      }
    </ul>
     <Button className="btn bg-primary" style={{marginLeft:"46%", marginTop:"6%" }} onClick={finalData}>Save your data</Button>
     
<div className="container-fluid" style={{height:"100px", marginTop:"30px", backgroundColor:"#1a2e3f", alignItems:"center"}}>
      <Link to="./check_data" className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", textAlign:"center", marginLeft:"4%", marginTop:"2%"}}>Back</Link>
      <Link to={{pathname: "/insight", newdata: state.json_data}}
       className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", textAlign:"center", float:"right", marginRight:"4%", marginTop:"2%"}}
      >Continue</Link> 
</div>

    </React.Fragment> 
  );
};

Prediction.propTypes = {
  inputValue: PropTypes.string,
  invalidSearch: PropTypes.string,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      role_name: PropTypes.string,
      recommended_title: PropTypes.string,
      org_level_1: PropTypes.string,
      pred_title_1: PropTypes.string,
      pred_title_2: PropTypes.string,
      pred_title_3: PropTypes.string,
      pred_title_4: PropTypes.string,
      pred_title_5: PropTypes.string,
      pred_title_6: PropTypes.string,
      pred_title_7: PropTypes.string,
      pred_title_8: PropTypes.string,
      pred_title_9: PropTypes.string,
      pred_title_10: PropTypes.string,
      compo_bracket: PropTypes.string,
      total_fte: PropTypes.string,
      confidence: PropTypes.string,
      occupation_desc : PropTypes.string,
    }),
  ),
};


const mapStateToProps = (state) => {
  return {
    rows: state.data ? state.data.rows : [],
    cols: state.data ? state.data.cols : [],
  };
};

export default connect(mapStateToProps, null)(PredictionGrid);
