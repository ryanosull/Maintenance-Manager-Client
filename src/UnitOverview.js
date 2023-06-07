import React, {useState, useEffect} from "react";


//declare endpoint variables
const unitsUrl = "http://localhost:9292/units"; 
const ownersUrl = "http://localhost:9292/owners";

function UnitOverview () {

    //setting state
    const [units, setUnits] = useState([]);
    const [owners, setOwners] = useState([]);

    useEffect(() => { //fetch units
        fetch(unitsUrl)
        .then(resp => resp.json())
        .then(unitData => setUnits(unitData))
    }, []);

    useEffect(() => { //fetch owners
        fetch(ownersUrl)
        .then(resp => resp.json())
        .then(ownerData => setOwners(ownerData))
    }, []);

    // console.log(owners)


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
                    {units.map((unit) => { //chaining syntax use below for name and phone_number
                        return (
                        <tr key={unit.id}>
                            <td>{unit.owner_id}</td>
                            <td>{owners.find((owner) => owner.id === unit.owner_id)?.name || null}</td> 
                            <td>{owners.find((owner) => owner.id === unit.owner_id)?.phone_number || null}</td> 
                            <td>{unit.address}</td>
                            <td>{unit.current_tenant}</td>
                            <td>{unit["open_request?"] ? "✅" : "✖️"}</td> 
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default UnitOverview