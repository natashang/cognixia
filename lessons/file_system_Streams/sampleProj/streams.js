/* From:
    https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
    The readable.pipe() method returns a reference to the destination stream making it possible to set up chains of piped streams:
*/

const fs = require('fs');
const r = fs.createReadStream('file.txt');
const z = zlib.createGzip();
const w = fs.createWriteStream('file.txt.gz');
r.pipe(z).pipe(w);