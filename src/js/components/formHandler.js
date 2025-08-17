// Слушает форму, валидирует, собирает данные
export function getValidatedFormData(formId, formTitle, formDesc) {
    let taskObj = {
        id: formId,
        title: formTitle,
        desc: formDesc,
    }

    return taskObj
}