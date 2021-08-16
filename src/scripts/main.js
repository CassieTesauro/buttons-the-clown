import { fetchRequests } from "./dataAccess.js"  //so the call inside the render() definition will work.
import { ButtonsTheClown } from "./ButtonsTheClown.js" // so the call inside the render() definition will work.

const mainContainer = document.querySelector("#container") //2.

const render = () => { //3.
    fetchRequests().then( //4.
        () => {
            mainContainer.innerHTML = ButtonsTheClown() //14.
        }
    )
}

render() //1.