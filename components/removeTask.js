const ButtonRemove = () => {
    const buttonRemove = document.createElement('button')
    buttonRemove.classList.add("delete-button")
    buttonRemove.innerText = "Remove"

    buttonRemove.addEventListener("click", removeTask)

    return buttonRemove
}

const removeTask = (evento) => {
    const buttonRemove = evento.target
    const taskRemoved = buttonRemove.parentElement

    taskRemoved.remove()
    
}

export default ButtonRemove