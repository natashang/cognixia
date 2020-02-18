/* Reading from a file system is always asynchronous */

// 'fs': file system
var fs = require('fs')

// reading from a local text file
/*
fs.readFile('./filesystemtext.txt', (err,data) => {
    process.stdout.write(data)
})
*/

// created a new file with text appended to the text from a local file
// process.stdout is like a lower-level version of console.log
fs.readFile('./filesystemtext.txt', (err,data) => {
    const filename = './input_modified.txt'    
    process.stdout.write(data)
    fs.writeFileSync(filename, data + '___I added some things here')
})

