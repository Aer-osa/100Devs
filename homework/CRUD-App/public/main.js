const {header} = require("express/lib/request")

const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            name: 'Garth and Wayne',
            quote: 'WE\'RE NOT WORTHY WE\'RE NOT WORTHY' 
        })
    })
})