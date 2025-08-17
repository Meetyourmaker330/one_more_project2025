import { templateModal } from './components/modalManager';
import { handlerBtn } from './components/modalManager';
import { data } from './components/data';
import { htmlBoard } from './components/board';
import { drawCard } from './components/boardManager';
export const newTaskButton = document.getElementById('new-task')
export const board = document.getElementById('board')
const root = document.getElementById('app')

function app() {
    root.appendChild(templateModal())
    htmlBoard(data)
}
app()
