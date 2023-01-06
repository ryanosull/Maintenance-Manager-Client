import React, {useState, useEffect} from "react"

const openReqsUrl = "http://localhost:9292/openrequests"

function OpenRequests () {


    const [openReqs, setOpenReqs] = useState([])

    useEffect(() => {
        fetch(openReqsUrl)
        .then(resp => resp.json())
        .then(reqData => setOpenReqs(reqData))
    }, [])


    return (
        <div>
            <table>
                <tr>
                    <th>Owner ID</th>
                    <th>Address</th>
                    <th>Current Tenant</th>
                    <th>Current Open Request?</th>
                </tr>
                {openReqs.map((req) => {
                    return (
                    <tr key={req.id}>
                        <td>{req.owner_id}</td>
                        <td>{req.address}</td>
                        <td>{req.current_tenant}</td>
                        <td>{openReqs["open_request?"]}✔️</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )

};

export default OpenRequests