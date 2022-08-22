/* Новые элементы должны добавляться в список по нажатию на Enter */
const input = document.querySelector('#input');
const items = document.querySelector('.items');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const listText = input.value;
        const newMessage = document.createElement('div');
        newMessage.classList.add('item')
        newMessage.textContent = listText;
        items.append(newMessage);
        input.value = '';


        newMessage.addEventListener('click', () => {
            newMessage.classList.toggle('done');
        })
    }
})

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */