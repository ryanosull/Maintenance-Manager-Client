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

function App() {
  
  //setting state
  const [units, setUnits] = useState([]);

  useEffect(() => { //fetch units
    fetch(unitsUrl)
    .then(resp => resp.json())
    .then(unitData => setUnits(unitData))
}, []);


  return (
    <div >
      <Header />
      <Sidebar />
        <Switch>
            <Route path="/unitsoverview">
              <UnitOverview />
            </Route>
            <Route path="/newmaintenancerequest">
              <NewRequestForm units={units} />
            </Route>
            <Route path="/openrequests">
              <OpenRequests />
            </Route>
        </Switch>
    </div> 
  );
}

export default App;


