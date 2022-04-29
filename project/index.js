const http = require("http")
const fs =require('fs')

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(fs.readFileSync('./templates/index.html'))
        res.end()
    }
    else if(req.url == '/about'){
         res.writeHead(200,{'content-type':'text/html'})
        res.write(fs.readFileSync('./templates/about.html'))
        res.end()
    }
    else if(req.url == '/contact'){
         res.writeHead(200,{'content-type':'text/html'})
        res.write(fs.readFileSync("./templates/contact.html"))
        res.end()
    }
})

server.listen(8000)