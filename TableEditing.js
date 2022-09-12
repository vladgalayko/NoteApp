export default class TableEditing {
    constructor(table) {
        this.tbody = table.querySelector('tbody');
    }

    init() {
        const tds = this.tbody.querySelectorAll('td');
        tds.forEach(td => {
            td.setAttribute('contenteditable', true);

            td.addEventListener('click', (e) => {
                this.startEditing(td);
            })
        });
    }

    startEditing(td) {

        this.createButtonToolbar(td)
    }
    
    cancelEditing(td) {

    }
    
    finishEditing(td) {

    }
    
    inEditing(td) {

    }

    createButtonToolbar(td) {
        const toolbar = document.createElement('div');
        toolbar.className = 'button-toolbar';

        toolbar.innerHTML = `
        <button class="btn btn-danger">Cancel</button>
        <button class="btn btn-primary">Save</button>
        `

        td.appendChild(toolbar);

    }
}