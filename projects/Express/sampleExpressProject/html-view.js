// another way to bring HTML in
const html= (model) => {
    return `
        <html>
        ${model.val}
        </html>
    `
}

const export2 = {
    'object': null
}

module.exports = {
    html, export2
}