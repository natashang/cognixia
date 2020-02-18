// basic web server
var http = require('http')
var fs = require('fs')

// req: server request
// res: server response
http
.createServer( (req, res) => {
    //console.log('Server created!')

    fs
    .readFile('./http.html', (err, data) => {

        // HTTP head informing we are giving HTML content
        // status code 200
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
 
        // done writing stuff, go ahead and send it
        res.end();
    })
})

.listen(8080, () => {
    console.log('listening on port 8080')
});
// on the browser: localhost:8080, we see "Look it's some HTML!"