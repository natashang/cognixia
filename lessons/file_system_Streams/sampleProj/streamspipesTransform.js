var http = require('http');
var fs = require('fs');
var Stream = require('stream');
var path = require('path');
var { StringDecoder } = require('string_decoder')

http
.createServer(function (req, res) {
  var path_ = path.resolve('./example.html')
  console.log(path_)
  var decoder = new StringDecoder('utf-8');
  const file = fs.createReadStream(path_)
  
  const transform = new Stream.Transform({
      objectMode: true,
      transform: (data, _, done) => {
          data = decoder.write(data).toUpperCase()
        done(null, data)
      }
    })
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  file.pipe(transform).pipe(res)
  file.on('end', () => {
    res.end()
  })
})

.listen(8080,() => {
    console.log('listening on port 8080')
})