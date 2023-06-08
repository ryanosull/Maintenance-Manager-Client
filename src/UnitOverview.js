import React from "react";
import "./UnitOverview.css";



function UnitOverview ({units, owners, openReqs}) {

    console.log(units)
    console.log(openReqs)

    // const currentOpenReqs = {
    //     value: (units.find((unit) => unit.id === openReqs.unit_id)?. "this" || "that")
    // }

    // const currentOpenReqs = {
    //     units.find((unit) => unit.id === openReqs.unit_id ? ✅ : ➕
    // }

    // const currentOpenReqs = units.find((unit) => unit.id === openReqs.unit_id) ? "✅" : "✖️";  // returns all X

    // const currentOpenReqs = units.find((unit) => unit.id === (openReqs.find((req) => req.unit_id))) ? "✅" : "✖️"

    // const currentOpenReqs = units.find((unit) => unit.id === openReqs.find((req) => req.unit_id).unit_id) ? "✅" : "✖️";//returns all CHECK

    // let currentOpenReqs = "✖️";
    // for (let i = 0; i < openReqs.length; i++) {
    //   const req = openReqs[i];
    //   for (let j = 0; j < units.length; j++) {
    //     const unit = units[j];
    //     if (unit.id === req.unit_id) {
    //       currentOpenReqs = "✅";
    //       break;
    //     }
    //   }
    //   if (currentOpenReqs === "✅") {
    //     break;
    //   }
    // }   returning all true values

    const currentOpenReqs = "xxx"
    


//when maintreqs date_closed === nil, take that same unit_id to Unit.id 
//for all units, if unit.id === maintreq.unit_id, then display ✅, otherwise display ✖️

//good question for JAV here = this kind of logic better handled on the backend or ok to (((try))) and handle here?

    return (
        <div id="tableContainer">
            <table id="unitsOverviewTable">
                <thead>
                    <tr>
                        <th>Owner ID</th>
                        <th>Owner Name</th>
                        <th>Owner Phone</th>
                        <th>Unit ID</th>
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
                            <td>{unit.id}</td>
                            <td>{unit.address}</td>
                            <td>{unit.current_tenant}</td>
                            {/* <td>{unit["open_request?"] ? "✅" : "✖️"}</td>  */}
                            <td>{currentOpenReqs}</td>
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






//refactor and take logic out of jsx. save all that shit to a variable and then {placeIt}.