import React, {useState} from "react";

const requestUrl = "http://localhost:9292/maintenancerequests"; //declare endpoint variable


function NewRequestForm ({units, owners}) {

    const [requests, setRequests] = useState([]);


    //form inital state
    const [urgency, setUrgency] = useState("");
    const [unitID, setUnitID] = useState("");
    const [description, setDescription] = useState("");
    const [expectedCost, setExpectedCost] = useState("");
    // const [actualCost, setActualCost] = useState("");
    const [dateOpened, setDateOpened] = useState("");
    // const [dateClosed, setDateClosed] = useState("");

    function handleSubmit(e) { //POST request
        e.preventDefault();

        let newMaintReq = { //new request obj
            urgency: urgency,
            unit_id: unitID,
            description: description,
            expected_cost: expectedCost,
            // actual_cost: actualCost,
            date_opened: dateOpened,
            // date_closed: dateClosed
        };

        //reset form
        setUrgency("");
        setUnitID("");
        setDescription("");
        setExpectedCost("");
        // setActualCost("");
        setDateOpened("");
        // setDateClosed("");

    

        let postRequest = { //POST as obj
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newMaintReq),
        };

        fetch(requestUrl, postRequest)
        .then(r => r.json())
        .then(newMaintReq => setRequests([...requests, newMaintReq]));
    }


    return (
        <div>
            <h2>New Maintenance Request</h2>
            <form onSubmit={handleSubmit} >

                <fieldset id="fieldset" value={urgency}>
                    <legend>Select urgency of repair</legend>
                    <div id="radioButton">
                        
                        {/* console errors for "for" attribute in labels suggests change to "htmlFor", however values from radio buttons not sent to backend with "htmlFor". keeping "for" attribute. */}

                        <input onChange={(e) => setUrgency(e.target.value)} type="radio" name="urgency" id="low" value="low" />
                        <label for="low">Low</label>

                        <input onChange={(e) => setUrgency(e.target.value)} type="radio" name="urgency" id="medium" value="medium" />
                        <label for="medium">Medium</label>

                        <input onChange={(e) => setUrgency(e.target.value)} type="radio" name="urgency" id="high" value="high" />
                        <label for="high">High</label>

                    </div>
                </fieldset>

                <input onChange={(e) => setUnitID(e.target.value)} type="number" name="unitID" placeholder="Enter Unit ID number" value={unitID} required />

                <textarea onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Describe the tenant's request here" value={description} required />
                
                <input onChange={(e) => setExpectedCost(e.target.value)} type="number" name="expectedCost" step="0.01" placeholder="Expected cost of repair" value={expectedCost} required />
                
                {/* <input  onChange={(e) => setActualCost(e.target.value)} type="number" name="actualCost" step="0.01" placeholder="Actual cost of repair" value={actualCost} /> */}

                Date opened:<input onChange={(e) => setDateOpened(e.target.value)} type="date" name="dateOpened" placeholder="Date request was received" required value={dateOpened} />

                {/* Date closed:<input  onChange={(e) => setDateClosed(e.target.value)} type="date" name="dateClosed" placeholder="Date repair was completed" value={dateClosed} /> */}

                <button type="submit">Submit Request</button>
            </form>

        <div>
            <h4>↓ Unit ID Quick Reference ↓</h4>
            <table>
                <thead>
                    <tr>
                        <th>Unit ID</th>
                        <th>Owner Name</th>
                        <th>Address</th>
                        <th>Tenant</th>
                    </tr>
                </thead>
                <tbody>
                    {units.map((unit) => {
                        return (
                            <tr key={unit.id}>
                                <td>{unit.id}</td>
                                <td>{owners.find((owner) => owner.id === unit.owner_id)?.name || null}</td> 

                                <td>{unit.address}</td>
                                <td>{unit.current_tenant}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

        </div>
    );
};

export default NewRequestForm;