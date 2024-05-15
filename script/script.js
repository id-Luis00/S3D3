

const newTask = function () {
    const div = document.getElementById('newTask');
    div.classList.add('tasks')

    const inputElement = document.getElementById('inputTask');
    const inputText = inputElement.value;

    const newParagraph = document.createElement('p')
    newParagraph.innerHTML = inputText
    div.appendChild(newParagraph)
}