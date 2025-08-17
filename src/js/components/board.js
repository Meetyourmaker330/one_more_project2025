import { data } from './data.js';
import { board } from '../main.js';

export function htmlBoard(columns) {
  const result = columns.forEach(item => {
    const colElement = document.createElement('div')
    colElement.classList.add('column')
    colElement.setAttribute('data-id', item.id)
    colElement.innerHTML = `
    <div class="col-header">
      <h4 class="col-title">${item.title}</h4>
      <span class="col-counte">${item.tasks.length}</span>
    </div>  
      <div class="col-body">
        <ul class="tasks-list"></ul>
      </div>
    `
    board.appendChild(colElement)
  });

  return result
}


