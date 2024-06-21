var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    var readStream=fs.createReadStream('index.html');
    readStream.pipe(res);
}).listen(8080);
console.log("Server Running on Port 8080");