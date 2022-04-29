const http = require("http")
http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>NodeMon Tutorial</h1>")
    res.write("<button>Click me </button>")
    res.write("<p>Hello using the nodemon package right now</p>")
    res.end()
}).listen(2000)

console.log("hello using the nodemon module how are you you are intelligent");