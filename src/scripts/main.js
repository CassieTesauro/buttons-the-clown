const mainContainer = document.querySelector("#container") //2.

const render = () => { //3.
    fetchRequests().then( //4.
        () => {
            mainContainer.innerHTML = ButtonsTheClown() //14.
        }
    )
}

render() //1.