import { getRequests } from "./dataAccess.js"


export const Requests = () => { //16.
    const requests = getRequests() //17.
    
    const requestListElement = (request) => { //36. deny button added
        return `<li>
                    ${request.parentName}
                    <button class='request__delete" id="request--${request.id}">Deny</button>  
                </li>`
    }

    let html = `
        <ul>
            ${requests.map(requestListElement).join("")}
        </ul>
        `
        return html  //18.
}