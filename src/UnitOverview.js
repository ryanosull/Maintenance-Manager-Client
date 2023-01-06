import React, {useState, useEffect} from "react";


const unitsUrl = "http://localhost:9292/units"

function UnitOverview () {

    const [units, setUnits] = useState([])

    useEffect(() => {
        fetch(unitsUrl)
        .then(resp => resp.json())
        .then(unitData => setUnits(unitData))
    }, [])

    // console.log(units)

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