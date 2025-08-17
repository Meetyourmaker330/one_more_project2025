// Управляет открытием/закрытием модалки
import { newTaskButton } from "../main"
import { templateCard } from "./cardFactory"
export function templateModal() {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('hidden')

    modal.innerHTML = `<div>
    <div class="modal-body">
      <form id="task">
        <input type="text" form="task" id="title-form">
        <input type="text" form="task" id="desc-form">
        <select>
            <option value="todo">todo</option>
            <option value="in-progress">in progress</option>
            <option value="done">done</option>
        </select>
        <button type="button"  class="form-btn create-task">create</button>
        <button type="button" class="form-btn modal-close">x</button>
      </form>
    </div>
  </div>`

    newTaskButton.addEventListener('click', () => {
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden')
            modal.classList.add('show')
        }
    })

    modal.querySelectorAll('.form-btn').forEach(item => {
        item.addEventListener('click', () => {
            if (modal.classList.contains('show')) {
                modal.classList.remove('show')
                modal.classList.add('hidden')
            }
            const titleForm = document.getElementById('title-form').value
            const descForm = document.getElementById('desc-form').value
            console.log(titleForm, descForm)
        })


    })




    return modal
}
