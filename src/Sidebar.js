import React, {useState, useEffect} from "react";
import "./Sidebar.css";
import UnitOverview from "./UnitOverview";

const UnitsUrl = "http://localhost:9292/units"

function Sidebar () {

    const [units, setUnits] = useState([])

    useEffect(() => {
        fetch(UnitsUrl)
        .then(resp => resp.json())
        .then(unitData => setUnits(unitData))
    }, [])


    return (
        <div id="sidebar">
            <div className="sidebarText">
                <UnitOverview units={units} />
            </div>
            <div className="sidebarText">
                New Maintenance Request
            </div>
            <div className="sidebarText">
                Open Requests
            </div>
            <div className="sidebarText">
                All Requests
            </div>
        </div>
    )



};

export default Sidebar