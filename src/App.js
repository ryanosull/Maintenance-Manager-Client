import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import Sidebar from  "./Sidebar";

// const maintReqsUrl = "http://localhost:9292/maintenancerequests"



function App() {
  
  // const [maintReqs, setMaintReqs] = useState([])
  
  // useEffect(() => {
  //   fetch(maintReqsUrl)
  //   .then(resp => resp.json())
  //   .then(reqData => setMaintReqs(reqData))
  // })



  return (
    <div >
      <Header />
      <Sidebar />
    </div> 
  );
}

export default App;


