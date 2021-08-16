import { Requests } from "./Requests.js"  //access to requests() definition 
import { ServiceForm } from "./ServiceForm.js"  //access to ServiceForm() definition 

export const ButtonsTheClown = () => {  //15. Requests() call :::AND::: //19. ServiceForm() call
    return `
        <h2>Buttons the Clown</h2>

        <section class="serviceForm">
            ${ServiceForm()}  
        </section>  

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
         `
}