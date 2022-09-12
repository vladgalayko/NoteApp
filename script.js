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
    const removeBtn = document.querySelectorAll('.remove--note');

    removeBtn.forEach(btn => btn.addEventListener('click', (e) => {
        e.target.closest('.table--row__note').remove()
    }))
// Archive
    const archiveBtn = document.querySelectorAll('.archive');
    const archiveTable = document.querySelector('.archive-table-notes');
    

    archiveBtn.forEach(btn => btn.addEventListener('click', (e) => {
        let archNote = e.target.closest('.table--row__note')
        archNote
        e.target.closest('.table--row__note').remove()
        archiveTable.insertAdjacentElement("beforeend", archNote)
    }))
// Edit
const editing = new TableEditing(document.querySelector('table'));
editing.init();
