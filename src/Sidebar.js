import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";




function Sidebar () {


    return (
        <nav id="sidebar">
            <NavLink className="sidebarText" exact to="/unitsoverview">Units Overview</NavLink>
            <NavLink className="sidebarText" exact to="/newmaintenancerequest">New Maintenance Request</NavLink>
            <NavLink className="sidebarText" exact to="/openrequests">Open Requests</NavLink>
            <div className="sidebarText">
                All Requests
            </div>
        </nav>
    )



};

export default Sidebar