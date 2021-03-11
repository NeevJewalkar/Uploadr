const fs = require('fs');


let testFunc = () => {
    return fs.readFileSync('./index.js')
}