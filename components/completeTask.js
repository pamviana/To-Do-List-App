const ButtonDone = () => {
    const buttonDone = document.createElement('button')
    buttonDone.classList.add("check-button")
    buttonDone.innerText = "Done"

    buttonDone.addEventListener("click", completeTask)

    return buttonDone
  }

  const completeTask = (evento) => {
    const buttonDone = evento.target

    const taskDone = buttonDone.parentElement

    taskDone.classList.toggle("done")
  }

  export default ButtonDone