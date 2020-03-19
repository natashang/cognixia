// another way to bring HTML in
const html= (model) => {
    return `
        <html>
            <h1> Hey ${model.val}, welcome!</h1>
        </html>
    `
}

const export2 = {
    'object': null
}

module.exports = {
    html, export2
}