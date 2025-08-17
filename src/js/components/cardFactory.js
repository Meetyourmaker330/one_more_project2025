// Создаёт карточку из данных формы
export function templateCard(id, title, desc) {
    return `
    <div class="card" id="${id}">
      <h4 class="card-header">${title}</h4>
      <div class="card-body">${desc}</div>
      <div class="card-footer">
        <button class="edit">edit</button>
        <button classs="delete">remove</button>
      </div>
    </div>
    `
}