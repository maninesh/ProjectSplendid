import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const UploadTopBar = (props) => {
    return(
        <>
        <div className="container-fluid" style={{borderTop:"1px solid white", borderBottom:"1px solid white", display:"flex", flexWrap:"wrap"}}>
                    
                    <div className="container-fluid mx-3" style={{width:"185px"}}>
                        <img src={props.imagesrc1} alt="icon" style={{height:"30px", width:"30px", marginTop:"10px"}}></img>
                        <p style={{fontSize:"14px", color:"white", margin:"-28px 0px 20px 40px"}}>Data requirements</p>
                    </div>
                    <div className="container-fluid mx-3" style={{width:"179px"}}>
                        <img src={props.imagesrc2} alt="icon" style={{height:"30px", width:"30px", marginTop:"10px"}}></img>
                        <p style={{fontSize:"14px", color:"white", margin:"-28px 0px 20px 40px"}}>Upload data</p>
                    </div>
                    <div className="container-fluid mx-3" style={{width:"179px"}}>
                        <img src={props.imagesrc3} alt="icon" style={{height:"30px", width:"30px", marginTop:"10px"}}></img>
                        <p style={{fontSize:"14px", color:"white", margin:"-28px 0px 20px 40px"}}>View data</p>
                    </div>
                    <div className="container-fluid mx-3" style={{width:"179px"}}>
                        <img src={props.imagesrc4} alt="icon" style={{height:"30px", width:"30px", marginTop:"10px"}}></img>
                        <p style={{fontSize:"14px", color:"white", margin:"-28px 0px 20px 40px"}}>Job matching</p>
                    </div>
                    <div className="container-fluid mx-3" style={{width:"179px"}}>
                        <img src={props.imagesrc5} alt="icon" style={{height:"30px", width:"30px", marginTop:"10px"}}></img>
                        <p style={{fontSize:"14px", color:"white", margin:"-28px 0px 20px 40px"}}>Insights ready</p>
                    </div>       
            </div>
        </>
    );
};
export default UploadTopBar;