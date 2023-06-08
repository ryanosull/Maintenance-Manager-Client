import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom"; // look up this error, determine action
import './App.css';
import Header from "./Header";
import Sidebar from  "./Sidebar";
import UnitOverview from "./UnitOverview"
import NewRequestForm from "./NewRequestForm";
import OpenRequests from "./OpenRequests";

//declare endpoint variables
const unitsUrl = "http://localhost:9292/units";
const ownersUrl = "http://localhost:9292/owners";
const openMaintReqsUrl = "http://localhost:9292/openmaintreqs";

function App() {
  
  //setting state
  const [units, setUnits] = useState([]);
  const [owners, setOwners] = useState([]);
  const [openReqs, setOpenReqs] = useState([]);

  useEffect(() => { //fetch units
    fetch(unitsUrl)
    .then(resp => resp.json())
    .then(unitData => setUnits(unitData))
}, []);

  useEffect(() => { //fetch owners
    fetch(ownersUrl)
    .then(resp => resp.json())
    .then(ownerData => setOwners(ownerData))
  }, []);

  useEffect(() => { // fetch MaintReqs where date_closed: nil / in other words, open reqs. 
    fetch(openMaintReqsUrl)
    .then(resp => resp.json())
    .then(maintData => setOpenReqs(maintData))
}, []);


  return (
    <div >
      <Header />
      <Sidebar />
        <Switch>
            <Route path="/unitsoverview">
              <UnitOverview units={units} owners={owners} openReqs={openReqs} />
            </Route>
            <Route path="/newmaintenancerequest">
              <NewRequestForm units={units} owners={owners} />
            </Route>
            <Route path="/openrequests">
              <OpenRequests openReqs={openReqs} />
            </Route>
        </Switch>
    </div> 
  );
}

export default App;


