import {allNotes} from './allNotes.js'


    const table = document.querySelector('.table-notes');
    
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
                <td><button class="edit--note"><i class="fa-solid fa-pen-to-square"></i></button></td>
                <td><button><i class="fa-solid fa-download"></i></i></button></td>
                <td><button class="remove--note"><i class="fa-solid fa-trash"></i></button></td>
            </tr>    
`;
        table.insertAdjacentHTML("beforeend", html)
    });

    const removeBtn = document.querySelectorAll('.remove--note');

    removeBtn.forEach(btn => btn.addEventListener('click', (e) => {
        e.target.closest('.table--row__note').remove()
    }))
