import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import {ExcelRenderer} from "react-excel-renderer";
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Button,
  Fade,
  FormFeedback,
} from "reactstrap";

import { addData } from "./redux/actions";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null,
    };
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.openNewPage = this.openNewPage.bind(this);
    this.fileInput = React.createRef();
  }

  renderFile = (fileObj) => {
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          dataLoaded: true,
          cols: resp.cols,
          rows: resp.rows,
        });
        this.props.addData({
          rows: resp.rows,
          cols: resp.cols,
        });
      }
    });
  };

  fileHandler = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if (fileName.slice(fileName.lastIndexOf(".") + 1) === "xlsx") {
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false,
        });
        this.renderFile(fileObj);
      } else {
        this.setState({
          isFormInvalid: true,
          uploadedFileName: "",
        });
      }
    }
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  openFileBrowser = () => {
    this.fileInput.current.click();
  };

  openNewPage = (chosenItem) => {
    const url = chosenItem === "https://github.com/maninesh/";
    window.open(url, "_blank");
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <form>
            <FormGroup row>
              <Col xs={4} sm={8} lg={10}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button
                      color="info"
                      style={{ color: "white", marginTop: "40px" }}
                      onClick={this.openFileBrowser.bind(this)}
                    >
                      <i className="cui-file"></i> Browse to upload&hellip;
                    </Button>
                    <input
                      type="file"
                      hidden
                      onChange={this.fileHandler.bind(this)}
                      ref={this.fileInput}
                      onClick={(event) => {
                        event.target.value = null;
                      }}
                      style={{ padding: "10px" }}
                    />
                  </InputGroupAddon>
                  <Input
                    type="text"
                    className="form-control"
                    value={this.state.uploadedFileName}
                    readOnly
                    invalid={this.state.isFormInvalid}
                    style={{ marginTop: "40px" }}
                  />
                  <FormFeedback>
                    <Fade
                      in={this.state.isFormInvalid}
                      tag="h6"
                      style={{ fontStyle: "italic" }}
                    >
                      Please select a .xlsx file only !
                    </Fade>
                  </FormFeedback>
                </InputGroup>
              </Col>
            </FormGroup>
            
          </form>

          {/* {this.state.dataLoaded && 
        <div>
          <div className="container-fluid" style={{height: "600px", width:"auto",marginLeft:"-20px", marginTop:"50px", overflowX:"scroll", overflowY:"scroll"}}>
            
              <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
              {alert("Your file has been uploaded and ready to show")}
          </div>  
        
        </div>} */}
        
        </div>
      </div>
    );
  }
}

export default connect(null, {
  addData,
})(UploadFile);
