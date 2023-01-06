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

    console.log(openReqs)

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

export default OpenRequests