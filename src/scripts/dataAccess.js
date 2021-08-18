const applicationState = { //12.
    requests: []
}
const mainContainer = document.querySelector("#container") //35.

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


//BIRD'S EYE VIEW: sendRequest() 'posts' a user's submitted request (AKA new state object) to the API to be stored as permanent state.
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
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) //34.
        })
}


export const deleteRequest = (id) => {  //38.  
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            } 
        )
}  
