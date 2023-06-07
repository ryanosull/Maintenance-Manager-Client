import React, {useState, useEffect} from "react"
import "./UnitOverview.css"


const openReqsUrl = "http://localhost:9292/openrequests"

function OpenRequests () {

    const [openReqs, setOpenReqs] = useState([])

    useEffect(() => {
        fetch(openReqsUrl)
        .then(resp => resp.json())
        .then(reqData => setOpenReqs(reqData))
    }, [])

    // console.log(openReqs)
    //currently pulling in unit info.

    return (
        <div>
            <table>
                <tr>
                    <th>Urgency</th>
                    <th>Description</th>
                    <th>Expected Cost</th>
                    <th>Actual Cost</th>
                    <th>Date Opened</th>
                    <th>Date Closed</th>
                </tr>
                {openReqs.map((req) => {
                    return (
                    <tr key={req.id}>
                        <td>{req.urgency}</td>
                        <td>{req.expected_cost}</td>
                        <td>{req.actual_cost}</td>
                        <td>{req.date_opened}</td>
                        <td>{req.date_closed}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )

};

export default OpenRequests;

//what needs to happen here. 
// could define open requests as those with a date_closed: nil
//i think we should remove open_req? from Unit. will have to adjust units overview to display open req (something like if date_closed === nil ? display + for open req : otherwise display - for no current open_reqs)
//thinking we do not need Unit.open_requests. 

//we want maint req info in here. we likely want unit and req info in here. 

//if date_closed === nil, then display unit_id and do some logic to get the info that we need. 