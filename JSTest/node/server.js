var http = require('http');
http.createServer((req,res)=>{
  res.end("test")
}).listen(3000)
console.log("Running on 3000")