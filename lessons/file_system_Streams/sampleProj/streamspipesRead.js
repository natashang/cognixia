var http = require('http')
var fs = require('fs')
var Stream = require('stream')
var path = require('path')
// returns a buffer as a readable type

http
.createServer( (req, res) => {

    var path_ = path.resolve('./http.html')
    const file = fs.createReadStream(path_)

    res.writeHead(200, {'Content-Type': 'text/html'})

    // pipe connects readable streams to writeable streams
    file.pipe(res)

    file.on('end', () => {
        res.end()
    })
    
})

.listen(8080, () => {
    console.log('listening on port 8080')
});
