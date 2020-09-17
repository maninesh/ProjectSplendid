import React from "react";
import UploadTopBar from "../components/UploadTopBar";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
import { OutTable} from "react-excel-renderer";
import "./CheckData.css";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";

let head1 = "Upload workforce data for Faethm";
let head2 = "USER DATA TABLE";

class CheckData extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
            <div className="row" style={{marginBottom:"16.3%"}}>
            <div className="container-fluid" style={{width:"95%",height:"80px", marginRight:"3%", marginBottom:"-6%"}}>
      <div className="container" style={{width:"auto",height:"auto", float:"left"}}>
      <NavLink exact to="/" ><img src="./images/faethm.svg" alt="logo" style={{height:"65px", width:"65px"}}/></NavLink>
      </div>
     
      </div>
      <div className="col-1" style={{width:"1%", marginRight:"4%"}}>
                    
                    
                    </div>
            <div className="col-10">
              <div className="container-fluid" style={{ height: "80px" }}>
                
              </div>
              <div className="container-fluid" style={{ marginBottom: "40px" }}>
                <h1>{head1}</h1>
              </div>
              <UploadTopBar
                imagesrc1="./images/tick.png"
                imagesrc2="./images/tick.png"
                imagesrc3="./images/3a.png"
                imagesrc4="./images/4b.png"
                imagesrc5="./images/5b.png"
              />
              <h2>{head2}</h2>
             
              
            </div>
          </div>
          <div>
            <div
              className="container-fluid"
              style={{
                height: "600px",
                width: "82%",
                marginLeft: "13%",
                marginTop: "-15%",
                overflowX: "scroll",
                overflowY: "scroll",
              }}
            >
              <OutTable
                data={this.props.rows}
                columns={this.props.cols}
                tableClassName="ExcelTable2007"
                tableHeaderRowClass="heading"
              />
              
            </div>
          </div>
          <Footer backlink="/data_upload" contlink="/job_matching" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rows: state.data ? state.data.rows : [],
    cols: state.data ? state.data.cols : [],
  };
};
export default connect(mapStateToProps, null)(CheckData);
