function trim() {
    let name = 'Mohsin Ali'
    console.log('Trimmed name is:', name.trim())
}

function changetoLowerCase() {
    let name = 'MOHSIN ALI'
    console.log('Name in lowercase is:', name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'mohsin alii'
    console.log('Name in uppercase is: ', name.toUpperCase())
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase
