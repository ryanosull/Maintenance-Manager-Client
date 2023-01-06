import React, {useState} from "react";

const requestUrl = "http://localhost:9292/maintenancerequests"

function NewRequestForm () {

    const [requests, setRequests] = useState([])

    const [urgency, setUrgency] = useState("")
    const [description, setDescription] = useState("")
    const [expectedCost, setExpectedCost] = useState(0)
    const [actualCost, setActualCost] = useState(0)
    const [episode, setEpisode] = useState(0)









    return (
        <div>
            <h2>New Maintenance Request</h2>
            <form onSubmit={""} >
                <fieldset id="fieldset">
                    <legend>Select urgency of repair</legend>
                    <div id="radioButton">

                        <input type="radio" name="urgency" id="low" />
                        <label for="low">Low</label>

                        <input type="radio" name="urgency" id="medium" />
                        <label for="medium">Medium</label>

                        <input type="radio" name="urgency" id="high" />
                        <label for="high">High</label>

                    </div>
                </fieldset>
                <input onChange={""} type="text" name="description" placeholder="Describe the tenant's request here" value="" required />
                <input type="number" name="expectedCost" step="0.01" placeholder="Expected cost of repair" value="" required />
                <input type="number" name="actualCost" step="0.01" placeholder="Actual cost of repair" value="" />
                Date opened:<input type="date" name="dateOpened" placeholder="Date request was received" required value="" />
                Date closed:<input type="date" name="dateClosed" placeholder="Date repair was completed" value="" />
                <button type="submit">Submit Request</button>
            </form>
        </div>
    )
};

export default NewRequestForm

//actualCost, dateClosed is not required, as that would be PATCHed in post-repair. 