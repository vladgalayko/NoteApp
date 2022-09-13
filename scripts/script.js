import {allNotes, archivedNotes} from './allNotes.js'
import TableEditing from './tableEditing.js';


  const table = document.querySelector('.table-notes');
    
  const render = () => {
    allNotes.map((note) => {
        const {id, name, category, created, content} = note;
        const html = `
            <tr class="table--row__note">
                <td class="table--data__id" style="display:none">${id}</td>
                <td>${name}</td>
                <td>${created}</td>
                <td>${category}</td>
                <td>${content}</td>
                <td>Empty for the time being</td>
                <th><button class="edit--note"><i class="fa-solid fa-pen-to-square"></i></button></th>
                <th><button class="archive"><i></i></i></button></td>
                <th><button class="remove--note"><i class="fa-solid fa-trash"></i></button></th>
            </tr>    
`;
        table.insertAdjacentHTML("beforeend", html)
    });
  }
  render();
// Remove
function removeNote() {
    const removeBtn = document.querySelectorAll('.remove--note');
    removeBtn.forEach(btn => btn.addEventListener('click', (e) => {
        e.target.closest('.table--row__note').remove()
    }))
}

// Archive
function archiveNote() {
    const archiveBtn = document.querySelectorAll('.archive');
    const archiveTable = document.querySelector('.archive-table-notes');
    

    archiveBtn.forEach(btn => btn.addEventListener('click', (e) => {
        let archNote = e.target.closest('.table--row__note')
        archNote
        e.target.closest('.table--row__note').remove()
        archiveTable.insertAdjacentElement("beforeend", archNote)
    }))
}
// Edit
    const editing = new TableEditing(document.querySelector('table'));
    editing.init();

// Add note

    const form = document.querySelector('#form');
    const nameInput = document.querySelector('#name');

function createNote() {
    const category = document.querySelector('#category');
    const content = document.querySelector('#content');

    const note = document.createElement('tr');
    note.classList = "table--row__note"
    const noteText = document.createElement('td');
    noteText.textContent = nameInput.value;
    const created = document.createElement('td');
    created.textContent = new Date();
    const categoryTd = document.createElement('td');
    categoryTd.textContent = category.value;
    const contentTd = document.createElement('td');
    contentTd.textContent = content.value;
    const timeBeing = document.createElement('td');
    timeBeing.textContent = "Empty for the time being"
    const editBtnTh = document.createElement('th');
    const editBtn = document.createElement('button');
    editBtn.classList = "edit--note";
    const arcBtnTh = document.createElement('th');
    const arcBtn = document.createElement('button');
    arcBtn.classList = "archive";
    arcBtn.onclick = archiveNote;
    const remBtnTh = document.createElement('th');
    const remBtn = document.createElement('button');
    remBtn.classList = "remove--note";
    remBtn.onclick = removeNote;
    
    note.appendChild(noteText);
    note.appendChild(created);
    note.appendChild(categoryTd);
    note.appendChild(contentTd);
    note.appendChild(timeBeing);
    note.appendChild(editBtnTh);
    editBtnTh.appendChild(editBtn)
    note.appendChild(arcBtnTh);
    arcBtnTh.appendChild(arcBtn);
    note.appendChild(remBtnTh);
    remBtnTh.appendChild(remBtn);

    
    return note;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const note = createNote();
    
    table.appendChild(note)
})


removeNote();
archiveNote();