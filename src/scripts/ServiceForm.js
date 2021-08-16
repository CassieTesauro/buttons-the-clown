import { sendRequest } from "./dataAccess.js"  //so we can use the sendRequest(dataToSendToAPI) function call in this module

export const ServiceForm  = () => { //20.
    let html = `
                <div class="field">
                    <label class="label" for="serviceParentName">Parent Name</label>
                    <input type="text" name="serviceParentName" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceChildName">Child Name</label>
                    <input type="text" name="serviceChildName" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceGroupSize">Group Size</label>
                    <input type="number" name="serviceGroupSize" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceAddress">Address</label>
                    <input type="text" name="serviceAddress" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceDate">Date needed</label>
                    <input type="date" name="serviceDate" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceHours">Hours</label>
                    <input type="number" name="serviceHours" class="input" />
                </div>

                <button class="button" id="submitRequest">Submit Request</button>
            `
    
    return html
}


const mainContainer = document.querySelector("#container") //set up for step 21.

//BIRD'S EYE VIEW: added event listener to collect user input, construct an object for the service request.  The call of 'sendrequest' goes with the 'sendrequest' in dataAcess.js.

mainContainer.addEventListener("click", clickEvent => { //21.
    if (clickEvent.target.id === "submitRequest") {  //22.
        //23. 
        const userParentName = document.querySelector("input[name='serviceParentName']").value
        const userChildName = document.querySelector("input[name='serviceChildName']").value
        const userGroupSize = document.querySelector("input[name='serviceGroupSize']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userHours = document.querySelector("input[name='serviceHours']").value

        const dataToSendToAPI = {  //24.
            parentName: userParentName,
            childName: userChildName,
            groupSize: userGroupSize,  //parse int if string error
            address: userAddress,
            date: userDate,
            hours: userHours
        }

        sendRequest(dataToSendToAPI) //25.

    }

})