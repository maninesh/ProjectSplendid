import React from "react";
import Home from "./Home/Home";
import UploadPage from "./DataRequirement/UploadPage";
import CheckData from "./CheckData/CheckData";
import Practice from "./Practice.js";
import Search from "./search.js";
import Searchdesc from "./Searchdesc.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Route, Switch} from "react-router-dom";
import SearchPrediction from "./SearchPrediction";
import Jobmatching from "./Jobmatching";
import Insight from "./Insight";

const Root = () => {
    return (
        <>
        
        <Switch>
        <Route component={Home} exact path="/" />
        <Route component={UploadPage} path="/data_requirement" />
        {/* <Route component={DataUpload} path="/data_upload" /> */}
        <Route component={CheckData} path="/check_data" />
        <Route component={Practice} path="/data_upload" />
        <Route component={Search} path="/search" />
        <Route component={Searchdesc} path="/searchdesc" />
        <Route component={SearchPrediction} path="/prediction" />
        <Route component={Jobmatching} path="/job_matching" />
        <Route component={Insight} path="/insight" />
        </Switch>
        
        </>
    );
};

export default Root;
