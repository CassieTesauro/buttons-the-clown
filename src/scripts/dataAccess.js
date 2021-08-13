const applicationState = { //12.
    requests: []
}

const API = "http://localhost:8088"  //7.

export const fetchRequests = () => {  //5.
    return fetch(`${API}/requests`) //6. 
                                    //8. PROMISE{} --> RESPONSE
        .then(response => response.json()) //9.
        .then(
            (serviceRequests) => { //10
                applicationState.requests = serviceRequests //11.

            }
        )
}

export const getRequests = () => {  //13. getter function definition
    return applicationState.requests.map(request => ({...request}))  
}