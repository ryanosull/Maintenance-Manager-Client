import React, {useState} from "react";

const requestUrl = "http://localhost:9292/maintenancerequests"


function NewRequestForm () {

    const [requests, setRequests] = useState([])

    const [urgency, setUrgency] = useState("")
    const [description, setDescription] = useState("")
    const [expectedCost, setExpectedCost] = useState("")
    const [actualCost, setActualCost] = useState("")
    const [dateOpened, setDateOpened] = useState("")
    const [dateClosed, setDateClosed] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let newMaintReq = {
            urgency: urgency,
            description: description,
            expected_cost: expectedCost,
            actual_cost: actualCost,
            date_opened: dateOpened,
            date_closed: dateClosed
        }

        setUrgency("")
        setDescription("")
        setExpectedCost("")
        setActualCost("")
        setDateOpened("")
        setDateClosed("")

    

        let postRequest = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(newMaintReq),
        }
        fetch(requestUrl, postRequest)
        .then(r => r.json())
        .then(newMaintReq => setRequests([...requests, newMaintReq]))
    }


    return (
        <div>
            <h2>New Maintenance Request</h2>
            <form onSubmit={handleSubmit} >
                <fieldset id="fieldset" value={urgency}>
                    <legend>Select urgency of repair</legend>
                    <div id="radioButton">

                        <input onChange={(e) => setUrgency(e.target.value)} type="radio" name="urgency" id="low" value="low" />
                        <label for="low">Low</label>

                        <input onChange={(e) => setUrgency(e.target.value)} type="radio" name="urgency" id="medium" value="medium" />
                        <label for="medium">Medium</label>

                        <input onChange={(e) => setUrgency(e.target.value)} type="radio" name="urgency" id="high" value="high" />
                        <label for="high">High</label>

                    </div>
                </fieldset>
                <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Describe the tenant's request here" value={description} required />
                
                <input onChange={(e) => setExpectedCost(e.target.value)} type="number" name="expectedCost" step="0.01" placeholder="Expected cost of repair" value={expectedCost} required />
                
                <input  onChange={(e) => setActualCost(e.target.value)} type="number" name="actualCost" step="0.01" placeholder="Actual cost of repair" value={actualCost} />

                Date opened:<input onChange={(e) => setDateOpened(e.target.value)} type="date" name="dateOpened" placeholder="Date request was received" required value={dateOpened} />

                Date closed:<input  onChange={(e) => setDateClosed(e.target.value)} type="date" name="dateClosed" placeholder="Date repair was completed" value={dateClosed} />

                <button type="submit">Submit Request</button>
            </form>
        </div>
    )
};

export default NewRequestForm

// need to work on backend first, but new req should include unit and maintreq IDs. 
// get rid of actual cost. this is something that will be PATCHed in the open req section.
//get rid of date closed. add this to open req section. 





//actualCost, dateClosed is not required, as that would be PATCHed in post-repair. 