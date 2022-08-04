const add = document.querySelector('.add')
const deletebtn = document.querySelector('.delete')
const deleteNote = document.getElementsByClassName('delete-note')
const deleteAll = document.querySelector('.delete-all')
const save = document.querySelector('.save')
const cancel = document.querySelector('.cancel')


const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')
let selectedValue

let cardID = 0


const openPanel = () => {
    notePanel.style.display = 'flex'
}

const closePanel = () => {
    notePanel.style.display = 'none'
    textArea.value = ''
    error.style.visibility = 'hidden'
    category.selectedIndex = 0
}

const addNote = () => {
    if (textArea.value === '') {
        error.style.visibility = 'visible'
    } else if (category.options[category.selectedIndex].value === '0') {
        error.style.visibility = 'visible'
    } else {
        error.style.visibility = 'hidden'
        createnote()
    }
}


const createnote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)
    selectvalue()
    newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleNote(${cardID})">
          <i class="fas fa-times icon"></i>
        </button>
      </div>
      <div class="note-body">
        ${textArea.value}
      </div>
    `

    noteArea.appendChild(newNote)
    cardID++;
    textArea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none'
    checkcolor(newNote)
}


const selectvalue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkcolor = (note) => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break
    }
}


const deleNote = (id) => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}


const deleNoteAll = () => {
    noteArea.textContent=''
}

add.addEventListener('click', openPanel)
cancel.addEventListener('click', closePanel)
save.addEventListener('click', addNote)
deleteAll.addEventListener('click', deleNoteAll)






