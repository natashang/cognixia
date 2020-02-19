// another way to bring HTML in
const html= (model) => {
    return `
        <html>
            <h1> Hey, welcome!</h1>
            <form action="#" method="POST">
                <label for="comment-name"></label> <br>
                <input type="text" name="comments" >
                <input type="submit" value="Submit">
            </form>
        </html>
    `
}

const resultTable = (model) => {
    const html = `
        <html>
        <div style='display:flex; justify-content:center;align-items:vertical-align;>
    `

    return model.map ( (item) => {
        html += `
            <span>${item.email}</span>
            <span>${item.comment}</span>
        `
        return true
    })

    html += `
        </div>
        </html>
    `
}

const export2 = {
    'object': null
}

module.exports = {
    html, export2, resultTable
}

/*
var fs = require('fs')

fs.readFile('./filesystemtext.txt', (err,data) => {
    const filename = './input_modified.txt'    
    process.stdout.write(data)
    fs.writeFileSync(filename, data + '___I added some things here')
})

*/