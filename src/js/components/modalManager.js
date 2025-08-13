// Управляет открытием/закрытием модалки
export function modalHtml() {
    return `
    <div class="modal hidden" id="task-modal">
  <form class="task-form" id="task-form">
    <input type="text" name="title" placeholder="Заголовок" />
    <textarea name="description" placeholder="Описание"></textarea>
    <select name="status">
      <option value="todo">TODO</option>
      <option value="in-progress">IN PROGRESS</option>
      <option value="done">DONE</option>
    </select>
    <div class="form-footer">
      <button type="submit">Создать</button>
      <button>Закрыть</button>
    </div>
  </form>
</div>
    `
}