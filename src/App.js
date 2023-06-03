import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Sidebar from  "./Sidebar";
import UnitOverview from "./UnitOverview"
import NewRequestForm from "./NewRequestForm";
import OpenRequests from "./OpenRequests";


//this is a test for test branch - commits not appearing in gh contribs. 


function App() {
  




  return (
    <div >
      <Header />
      <Sidebar />
        <Switch>
            <Route path="/unitsoverview">
              <UnitOverview />
            </Route>
            <Route path="/newmaintenancerequest">
              <NewRequestForm />
            </Route>
            <Route path="/openrequests">
              <OpenRequests />
            </Route>
        </Switch>
    </div> 
  );
}

export default App;


