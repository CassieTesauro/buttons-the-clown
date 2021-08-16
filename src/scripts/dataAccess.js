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


export const sendRequest = (userServiceRequest) => { //26.
    const fetchOptions = {  //27.
        method: "POST",  //28.
        headers: {
            "Content-Type": "application/json"  //29.
        },
        body: JSON.stringify(userServiceRequest)  //30.
    }
    return fetch(`${API}/requests`, fetchOptions)  //31.
        .then(response => response.json())  //32.
        .then(() => {  //33.

        })
}

