import React, {useState} from "react";
import "./UnitOverview.css";
//use effect removed

// const unitsWithOpenReqsUrl = "http://localhost:9292/unitswithopenrequests"; //likely uncessary once open_req? column removed

const maintReqUrl = "http://localhost:9292/maintenancerequests/"; //declare endpoint variable


function OpenRequests ({openReqs, setOpenReqs}) {

    // const [unitReqs, setUnitReqs] = useState([]); // likely delete


    // useEffect(() => {  //will likely delete this
    //     fetch(unitsWithOpenReqsUrl)
    //     .then(resp => resp.json())
    //     .then(unitReqData => setUnitReqs(unitReqData))
    // }, []);


    // const test = openReqs.map((req) => {} )

    // console.log(unitReqs, "removing error")
    // // console.log(openReqs)

    //likely do not need anything above this line

    //jav, how do i access single reqs from the openREqs array? 

    const [formData, setFormData] = useState ({
        date_closed: openReqs.map((req) => req.date_closed)
    });

    const handleInputChange = (e) => {

        const {name, value} = e.target; //destructure name (attribute of input element) and value (current value of input element)

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        console.log(name, value) //working as intended. logging: <date_closed 2023-06-21>
    };

    function handleSubmit(e) {

        e.preventDefault();

        const patchReq = { //PATCH as object
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(formData),
        };

        fetch(`${maintReqUrl}${openReqs.map(req => req.id)}`, patchReq)
        .then(resp => resp.json())
        .then(patchedRequest => {

            const updatedRequests = openReqs.map(req => (req.id === patchedRequest.id ? patchedRequest : req));

            setOpenReqs(updatedRequests);
        });

        console.log(openReqs.map(req => req.id))
    };

    // at value={ || ""} this controls form, but disallows date selection to be displayed. note that value is still getting logged by above c.log.
    // ternary to display selected date if input is changed? --- inputIsEmpty ? "" : e.target.value or req.date_closed 

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
                    <th>Delete</th>
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
                                
                                <td>
                                    <form onSubmit={handleSubmit}>
                                        <input onChange={handleInputChange} type="date" name="date_closed" value={req.date_closed || ""}/>
                                        <button type="submit">submit</button>
                                    </form>
                                </td>

                                <td>{req.unit_id}</td>
                                <td><button>DELETE❌</button></td>

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

//need actual cost in here, as well!

//maybe we have a solution/notes column that we patch in as well. will start as nil, then patch in notes. 