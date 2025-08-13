import { modalHtml } from './components/modalManager';
import { handlerBtn } from './components/modalManager';
import { data } from './components/data';
import { htmlBoard } from './components/board';
function app() {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('wrapper').insertAdjacentHTML('beforeend', modalHtml())
    })
    document.getElementById('new-task').addEventListener('click', () => {
        document.getElementById('task-modal').style.display = 'block'
    })
    document.getElementById('board').innerHTML = htmlBoard(data)
}
app()
