import React, {useState, useEffect} from "react";
import "./UnitOverview.css";


const unitsWithOpenReqsUrl = "http://localhost:9292/unitswithopenrequests"; //likely uncessary once open_req? column removed



function OpenRequests ({openReqs}) {

    const [unitReqs, setUnitReqs] = useState([]); // likely delete


    useEffect(() => {  //will likely delete this
        fetch(unitsWithOpenReqsUrl)
        .then(resp => resp.json())
        .then(unitReqData => setUnitReqs(unitReqData))
    }, []);



    console.log(unitReqs)
    // console.log(openReqs)

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Urgency</th>
                    <th>Description</th>
                    <th>Expected Cost</th>
                    <th>Date Opened</th>
                    <th>Date Closed</th>
                    <th>Unit ID</th>
                </tr>
                </thead>
                    <tbody>
                        
                        {openReqs.map((req) => {
                            return (
                            <tr key={req.id}>
                                <td>{req.urgency}</td>
                                <td>{req.description}</td>
                                <td>{req.expected_cost}</td>
                                <td>{req.date_opened}</td>
                                <td>{req.date_closed}</td>
                                <td>{req.unit_id}</td>
                            </tr>
                            );
                        })}

                    </tbody>
            </table>
        </div>
    );
};

export default OpenRequests;

//what needs to happen here. 
// could define open requests as those with a date_closed: nil
//i think we should remove open_req? from Unit. will have to adjust units overview to display open req (something like if date_closed === nil ? display + for open req : otherwise display - for no current open_reqs)
//thinking we do not need Unit.open_requests. 



//if date_closed === nil, then display unit_id and do some logic to get the info that we need. 

//low green, med yellow, high red