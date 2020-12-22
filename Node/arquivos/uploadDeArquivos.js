const fs = require('fs')

fs.readFile('./assets/pet1.jpg', (erro, buffer) => {

    fs.writeFile('./assets/pet2.jpg', buffer, (erro) => {
        
    })


} )