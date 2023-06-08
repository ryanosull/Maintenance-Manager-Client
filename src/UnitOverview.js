import React from "react";
import "./UnitOverview.css";



function UnitOverview ({units, owners}) {


    return (
        <div id="tableContainer">
            <table id="unitsOverviewTable">
                <thead>
                    <tr>
                        <th>Owner ID</th>
                        <th>Owner Name</th>
                        <th>Owner Phone</th>
                        <th>Address</th>
                        <th>Current Tenant</th>
                        <th>Current Open Request?</th>
                    </tr>
                </thead>
                <tbody>
                    {units.map((unit) => { 
                        return (
                        <tr key={unit.id}>
                            <td>{unit.owner_id}</td>
                            {/* chaining syntax: find owner where owner ID matches unit.owner_id, then display name/number if true, or do nothing */}
                            <td>{owners.find((owner) => owner.id === unit.owner_id)?.name || null}</td> 
                            <td>{owners.find((owner) => owner.id === unit.owner_id)?.phone_number || null}</td> 
                            <td>{unit.address}</td>
                            <td>{unit.current_tenant}</td>
                            <td>{unit["open_request?"] ? "✅" : "✖️"}</td> 
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UnitOverview; 

//what we want to do here is this:
//here, for the current open req table column, we want to show if req is open by date closed === nil. 
//get rid of open_req? column in backend. 
// we will likely not need units with open reqs because we will use logic to represent - meaning take care of route on backend - likely uncessary