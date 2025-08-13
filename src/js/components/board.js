import { data } from './data.js';
// export const borad = document.getElementById('board')

export function htmlBoard(columns) {
    let str = ''
    columns.map(item => {
        str += `
          <div class="column" id="${item.id}">
            <div class="column-header">
              <h4 column-title>${item.title}</h4>
              <span>${item.tasks.length}</span>
            </div>
          </div>`
    })
    return str
}
