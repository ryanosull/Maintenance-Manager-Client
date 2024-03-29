import React from "react";
import "./UnitOverview.css";



function UnitOverview ({units, owners, openReqs, allMaintReqs}) {

    console.log(units)
    console.log(openReqs)
    console.log(allMaintReqs)

    const currentOpenReqs = "placeholder"


    // const currentOpenReqs = units.map((unit) => unit.id === (allMaintReqs.map(req) => req.unit_id === unit.id && req.date_closed === null))

    // const currentOpenReqs = units.map((unit) => {
    //     return unit.id === allMaintReqs.some((req) => req.unit_id === unit.id && req.date_closed === null) ? "✅" : "✖️"
    //   });
      

    // const currentOpenReqs = {
    //     value: (units.find((unit) => unit.id === openReqs.unit_id)?. "this" || "that")
    // }

    // const currentOpenReqs = {
    //     units.find((unit) => unit.id === openReqs.unit_id ? ✅ : ➕
    // }

    // const currentOpenReqs = units.find((unit) => unit.id === allMaintReqs.unit_id) ? "✅" : "✖️";
    //   // returns all falsey

    // const currentOpenReqs = units.find((unit) => unit.id === (openReqs.find((req) => req.unit_id))) ? "✅" : "✖️" //returns all falsey




    // const currentOpenReqs = units.find((unit) => unit.id === allMaintReqs.find((req) => req.unit_id && req.date_closed === null ).unit_id) ? "✅" : "✖️";
    // //returns all truthy





    // const currentOpenReqs = units.find((unit) => {
    //     const matchingReq = openReqs.find((req) => req.unit_id === unit.id && req.date_closed === null);
    //     return matchingReq !== undefined;
    //   }) ? "✅" : "✖️";
      

    // const currentOpenReqs = units.find((unit) => unit.id === openReqs.find((req) => req.unit_id && req.date_closed === null).unit_id) ? console.log("truthty") : console.log("falsey");


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

    // const currentOpenReqs = "xxx"
    
    // const currentOpenReqs = units.forEach(unit => console.log(unit.id))
    // const test = openReqs.forEach(req => console.log(req.unit_id))

    // units.forEach(unit => {
    //     const unitId = unit.id;
    //     openReqs.forEach(req => {
    //       const reqUnitId = req.unit_id;
    //       if (unitId === reqUnitId) {
    //         console.log("Unit ID:", unitId, "matches Request Unit ID:", reqUnitId);
    //       }
    //     });
    //   });

    // const currentOpenReqs = units.forEach(unit => {
    //     const unitId = unit.id;
    //     openReqs.forEach(req => {
    //         const reqUnitId = req.unit_id;
    //         if (unitId === reqUnitId) {
    //         console.log("true")
    //         }
    //         else {
    //             console.log("false")
    //         }
    //     });
    //     });

    // const currentOpenReqs = units.map((unit) => {
    //     const unitIDD = unit.id;

    //     openReqs.map((req) => {
    //         const reqUnitID = req.unit_id;
            
    //         if (unitIDD === reqUnitID) {
    //             return "✅"
    //         }
    //         else  {
    //             return "✖️"
    //         }

    //     })
    // }) .map errors

    // const currentOpenReqs = units.map((unit) => {
    //     const unitIDD = unit.id;
      
    //     return openReqs.map((req) => {
    //       const reqUnitID = req.unit_id;
      
    //       if (unitIDD === reqUnitID) {
    //         return "✅";
    //       } else {
    //         return "✖️";
    //       }
    //     });
    //   }); //lmao
      

    // this is a test

    // const currentOpenReqs = units.some((unit) => {
    //     return openReqs.some((req) => unit.id === req.unit_id);
    //   }) ? "✅" : "✖️"; // returns all truthy


    // const currentOpenReqs = units.find((unit) => {
    //     return openReqs.find((req) => unit.id === req.unit_id);
    //   }) ? "✅" : "✖️"; 
    // returns all truthy

    // const currentOpenReqs = units.some((unit) => {
    //     return openReqs.some((req) => unit.id === req.unit_id);
    // }) ? "✅" : "✖️";


    // const currentOpenReqs = units.find((unit) => {
    //     const reqWithUnitID = openReqs.find((req) => req.unit_id && req.date_closed != null);
    //     return reqWithUnitID && unit.id === reqWithUnitID.unit_id;
    //   }) ? "✅" : "✖️";
      


//when maintreqs date_closed === nil, take that same unit_id to Unit.id 
//for all units, if unit.id === maintreq.unit_id, then display ✅, otherwise display ✖️


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


//i know what the issue is here: we are comparing id to unit.id but not also taking into consideration date_closed: nil - dumbass



// for each unit, if the unit.id === allreqs.unit_id, and allreqs.date_closed === null, then display ✅, otherwise display ✖️