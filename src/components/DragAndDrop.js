import React, { useState } from "react";
import {parse} from "papaparse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const DragAndDrop = () => {
  const[highlighted, sethighlighted] = useState(false);
  return(
    <>
      <div className="container-fluid" style={{backgroundColor:"#1a2e3f", height:"280px", width:"auto", border:"1px dotted white", marginTop:"20px", color:"white", textAlign:"center"}}
      
      
      onDragEnter={()=>{
        sethighlighted(true);
      }}
      onDragLeave={()=>{
        sethighlighted(false);
      }}
      onDragOver={(e)=>{
        e.preventDefault();
      }}
      onDrop={(e)=>{
        e.preventDefault();
        sethighlighted(false);
        console.log(e.dataTransfer.files);


        Array.from(e.dataTransfer.files).filter((file)=>file.type === "text/csv")
        .forEach((file)=>{
          console.log(file);
        });
      }}
      >
      <img src="./images/upload_icon.png" alt="upload icon" style={{width:"50px", height:"50px", marginTop:"8%"}}/>
      <br/> Drag and Drop to upload</div>
    </>
  );
};

export default DragAndDrop;