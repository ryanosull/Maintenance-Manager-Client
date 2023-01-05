import React from "react";
// import UnitTable from "./UnitTable"


function UnitOverview ({units}) {

    return (
        <div>
            <table>
                <tr>
                    <th>Owner ID</th>
                    <th>Address</th>
                    <th>Current Tenant</th>
                    <th>Current Open Request?</th>
                </tr>
                {units.map((unit) => {
                    return (
                    <tr key={unit.id}>
                        <td>{unit.owner_id}</td>
                        <td>{unit.address}</td>
                        <td>{unit.current_tenant}</td>
                        <td>{unit["open_request?"] ? "✔️" : "❌"}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
};

export default UnitOverview