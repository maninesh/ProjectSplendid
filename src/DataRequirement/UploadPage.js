import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./UploadPage.css";
import UploadTopBar from "../components/UploadTopBar";
import TableUploadPage from "../components/TableUploadPage";
import Footer from "../components/Footer";
import { CSVLink} from "react-csv";
import jsPDF from 'jspdf';
import {NavLink} from "react-router-dom";


let head1 = "Upload workforce data for Faethm";
let para1 = "The Faethm prediction algorithm works best when assessing a complete and accurate dataset. * denotes a mandatory field, the additional information requested in the template will assist in providing deeper insights when reviewing your results. Example data is shown below, hover over the columns to learn the format before continuing.";
let head2 = "Download formatting instructions"
let para2 = "Save the formatting instructions for your reference by downloading this PDF.";

const csvData = [
    ["role_name", "recommended_title", "role_description","role_family","org_level_1","org_level_2","org_level_3","pred_title_1","pred_title_2","pred_title_3","pred_title_4","pred_title_5","pred_title_6","pred_title_7","pred_title_8","pred_title_9","pred_title_10","compo_bracket","total_fte","has_mgr_reports_ratio","confidence","Review Required","Predicted Occ Name","Selected Occ Code","Selected Occ Name","Occ Description"],
    ["Accountants", "Accounting", "Corporate Fiannce"],
    ["Software Tester", "Tester", "IT"],
    ["Data Analyst", "Data Mining", "Data Scientist"]
  ];

  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt');
    
    doc.text(20, 20, 'Please download the given template.')

    doc.setFont('helvetica')
    doc.setFontType('normal')
    doc.text(20, 60, 'Please fill up the all the rows as per the template headings')

    doc.setFont('helvetica')
    doc.setFontType('normal')
    doc.text(20, 100, 'Leave the columns empty if there is nothing to write instead of deleting columns.')      

    
    doc.save('demo.pdf')
  }   

const UploadPage = () => {
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
                        <h1>{head1}</h1>
                    </div>
                    <UploadTopBar
                      imagesrc1 ="./images/1a.png"
                      imagesrc2 ="./images/2b.png"
                      imagesrc3 ="./images/3b.png"
                      imagesrc4 ="./images/4b.png"
                      imagesrc5 ="./images/5b.png"
                    />
                    <div className="container-fluid mx-0" style={{display:"flex",flexWrap:"wrap", padding:"0px"}}>
                        <div className="container-fluid mx-0"style={{width:"62%", marginTop:"60px"}}>
                            <p>{para1}</p>  
                            <CSVLink data={csvData}><button className="btn btn-primary">Download data template</button></CSVLink>
                        </div>
                        <div className="container-fluid" style={{width:"38%", marginTop:"60px", backgroundColor:"#1b3e4e", padding:"10px"}}>
                            <p1>{head2}</p1>
                            <p>{para2}</p>
                            <button type="button" onClick={generatePDF} class="btn btn-outline-info btn-block">Download PDF instructions</button>
                        </div>
                    </div>
   
                <TableUploadPage/>
    
  
                </div>
            </div>
            <Footer
                backlink = "/"
                contlink = "/data_upload"
            />
        </div>
        </>
    );
};
export default UploadPage;