import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Sidebar from  "./Sidebar";
import UnitOverview from "./UnitOverview"





function App() {
  



  return (
    <div >
      <Header />
      <Sidebar />
      <Switch>
        <Route path={"/unitsoverview"}>
          <UnitOverview />
        </Route>        
      </Switch>
    </div> 
  );
}

export default App;


