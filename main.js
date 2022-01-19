
  import ButtonDone from "./components/completeTask.js"
  import ButtonRemove from "./components/removeTask.js"
   

  const createTask = (evento) => {
    evento.preventDefault()

    const list = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]")
    const inputValue = input.value

    const task = document.createElement("li")
    task.classList.add("task")

    const content = `<p class="content"> ${inputValue} </p>`
    task.innerHTML = content
    
    task.appendChild(ButtonDone())
    task.appendChild(ButtonRemove())
    list.appendChild(task)
    input.value = " "
  }

  const newTask = document.querySelector("[data-form-button")
  newTask.addEventListener("click", createTask)
  

