import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Sidebar from  "./Sidebar";
import UnitOverview from "./UnitOverview"

// const UnitsUrl = "http://localhost:9292/units"



function App() {
  
  // const [units, setUnits] = useState([])

  // useEffect(() => {
  //     fetch(UnitsUrl)
  //     .then(resp => resp.json())
  //     .then(unitData => setUnits(unitData))
  // }, [])




  return (
    <div >
      <Header />
      <Sidebar />
        <Switch>
          <Route path="/unitsoverview">
            <UnitOverview />
          </Route>        
        </Switch>
    </div> 
  );
}

export default App;


