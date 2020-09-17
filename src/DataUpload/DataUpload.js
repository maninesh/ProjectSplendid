import React from "react";
import UploadTopBar from "../components/UploadTopBar";
import DragAndDrop from "../components/DragAndDrop";
import Footer from "../components/Footer";
import "./DataUpload.css";
import {NavLink} from "react-router-dom";

const head1 = "Upload workforce data for Faethm"


const DataUpload = () => {
    return (
        <>
        
            <div className="container-fluid">
            <div className="row">
            <div className="container-fluid" style={{width:"95%",height:"80px", marginRight:"3%", marginBottom:"-6%"}}>
      <div className="container" style={{width:"auto",height:"auto", float:"left"}}>
      <NavLink exact to="/" ><img src="./images/faethm.svg" alt="logo" style={{height:"65px", width:"65px"}}/></NavLink>
      </div>
     
      </div>
      <div className="col-1" style={{width:"1%", marginRight:"4%"}}>
                    
                    
                    </div>
                <div className="col-10">
                    <div className="container-fluid" style={{marginBottom:"40px"}}>
                        <h1>{head1}</h1>
                    </div>
                    <UploadTopBar
                      imagesrc1 ="./images/tick.png"
                      imagesrc2 ="./images/2a.png"
                      imagesrc3 ="./images/3b.png"
                      imagesrc4 ="./images/4b.png"
                      imagesrc5 ="./images/5b.png"
                    />
                    <DragAndDrop/>
                    
                </div>
            </div>
            <Footer
            backlink = "/data_requirement"
            contlink = "/check_data"
            />
        </div>
        </>
    );
};
export default DataUpload;