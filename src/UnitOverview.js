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
                    {units.map((unit) => { //chaining syntax: find owner where owner ID matches unit.owner_id, the display name/number if true, otherwise do nothing
                        return (
                        <tr key={unit.id}>
                            <td>{unit.owner_id}</td>
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