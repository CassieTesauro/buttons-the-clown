import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js" 

const mainContainer = document.querySelector("#container")  //37.  Listener below calls the delete request function on the id when deny button is clicked

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})



export const Requests = () => { //16.
    const requests = getRequests() //17.
    const requestListElement = (request) => { //36. deny button added
        return `<li>
        ${request.parentName}
        <button class="request__delete" id="request--${request.id}">Deny</button> 
        </li>`
        }  
    let html = `
        <ul>
            ${requests.map(requestListElement).join("")}
        </ul>
        `
        return html  //18.
}









                    
