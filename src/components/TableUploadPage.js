import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import"../App.css";


const TableUploadPage = () => {
    return(
        <>
        <div className="container-fluid" style={{marginTop:"40px", width:"auto"}}>
        <div className="table-responsive">
            <table className="table table-borderless" style={{color:"white"}}>
            <thead className="thead" style={{backgroundColor:"#46616e", fontWeight:"normal"}}>
            <tr>
                <th title="Hooray!">ID</th>
                <th title="Hooray!">FTE&nbsp;*</th>
                <th title="Hooray!">JOB&nbsp;NAME&nbsp;*</th>
                <th title="Hooray!">TOTAL&nbsp;COMPENSATION&nbsp;*</th>
                <th title="Hooray!">EMPLOYEE&nbsp;TYPE</th>
                <th title="Hooray!">GENDER</th>
                <th title="Hooray!">BIRTH&nbsp;YEAR</th>
                <th title="Hooray!">JOB&nbsp;DESCRIPTION</th>
                <th title="Hooray!">JOB&nbsp;FAMILY</th>
                <th title="Hooray!">EMPLOYEE&nbsp;LEVEL</th>
                <th title="Hooray!">ORG&nbsp;LEVEL&nbsp;1</th>
                <th title="Hooray!">ORG&nbsp;LEVEL&nbsp;2</th>
                <th title="Hooray!">ORG&nbsp;LEVEL&nbsp;3</th>
                <th title="Hooray!">SITE&nbsp;NAME</th>
                <th title="Hooray!">STREET&nbsp;ADDRESS</th>
                <th title="Hooray!">CITY</th>
                <th title="Hooray!">STATE</th>
                <th title="Hooray!">POST&nbsp;CODE</th>
                <th title="Hooray!">COUNTRY</th> 
                <th title="Hooray!">MANAGER&nbsp;ID</th>
                <th title="Hooray!">BONUS</th>
            </tr>
            </thead>
            <tbody>
                <tr style = {{borderBottom: "1px dotted white"}}>
                <td>272</td>
                <td>0.5</td>
                <td>Senior project manager</td>
                <td>12345</td>
                <td>Contract</td>
                <td>F</td>
                <td>1956</td>
                <td>Lorem Ipsum</td>
                <td>Product</td>
                <td>4</td>
                <td>Head Office</td>
                <td>-</td>
                <td>-</td>
                <td>Headquarters</td>
                <td>8</td>
                <td>New Orleans</td>
                <td>Louisiana</td>
                <td>46239</td>
                <td>United States</td>
                <td>1231</td>
                <td>123456</td>
                </tr>
                <tr style = {{borderBottom: "1px dotted white"}}>
                <td>22</td>
                <td>1</td>
                <td>Project manager</td>
                <td>12345</td>
                <td>Permanent</td>
                <td>M</td>
                <td>1965</td>
                <td>Lorem Ipsum</td>
                <td>Product</td>
                <td>1</td>
                <td>Head Office</td>
                <td>-</td>
                <td>-</td>
                <td>Headquarters</td>
                <td>7246</td>
                <td>Lincoln</td>
                <td>Louisiana</td>
                <td>46239</td>
                <td>United States</td>
                <td>34745</td>
                <td>1255</td>
                </tr>
                
            </tbody>
            </table>
        </div>
        </div>
        </>
    );
};
export default TableUploadPage;

