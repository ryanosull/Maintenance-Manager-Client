import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
// import UnitOverview from "./UnitOverview";



function Sidebar () {

    // const [units, setUnits] = useState([])

    // useEffect(() => {
    //     fetch(UnitsUrl)
    //     .then(resp => resp.json())
    //     .then(unitData => setUnits(unitData))
    // }, [])

//ternary to route is x ? render overview : home
    return (
        <nav id="sidebar">
            <NavLink exact to="/unitsoverview">Units Overview</NavLink>
            <div className="sidebarText">
                New Maintenance Request
            </div>
            <div className="sidebarText">
                Open Requests
            </div>
            <div className="sidebarText">
                All Requests
            </div>
        </nav>
    )



};

export default Sidebar