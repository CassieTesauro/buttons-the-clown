export const ServiceForm  = () => { //20.
    let html = `
                <div class="field">
                    <label class="label" for="serviceDescription">Description</label>
                    <input type="text" name="serviceDescription" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceAddress">Address</label>
                    <input type="text" name="serviceAddress" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceBudget">Budget</label>
                    <input type="number" name="serviceBudget" class="input" />
                </div>
                <div class="field">
                    <label class="label" for="serviceDate">Date needed</label>
                    <input type="date" name="serviceDate" class="input" />
                </div>

                <button class="button" id="submitRequest">Submit Request</button>
            `
    
    return html
}


const mainContainer = document.querySelector("#container") //set up for step 21.

mainContainer = addEventListener("click", clickEvent => { //21.
    if (clickEvent.target.id === "submitRequest") {  //22.
        //23. below vvv
        const userParentName = document.querySelector("input[name='serviceParentName']").value
        const userChildName = document.querySelector("input[name='serviceChildName']").value
        const userGroupSize = document.querySelector("input[name='serviceGroupSize']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userHours = document.querySelector("input[name='serviceHours']").value

        const dataToSendToAPI = {  //24.
            parentName: userParentName,
            childName: userChildName,
            groupSize: userGroupSize,
            address: userAddress,
            date: userDate,
            hours: userHours
        }

        sendRequest(dataToSendToAPI) //25.

    }

})