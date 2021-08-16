import { getRequests } from "./dataAccess.js"


export const Requests = () => { //16.
    const requests = getRequests() //17.
    
    const requestListElement = (request) => {
        return `<li>${request.parentName}</li>`
    }

    let html = `
        <ul>
            ${requests.map(requestListElement).join("")}
        </ul>
        `
        return html  //18.
}