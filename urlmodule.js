// URL
const url = require("url")
const http = require("http")


http.createServer((req,res) =>{
    const parseUrl = url.parse(req.url,true);
    console.log(parseUrl.query.keyword);
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>Hello World !!</h1>")
    res.write("<button>Click Me</button>")
    res.write("<h2>From then node js web server</h2>")
    res.end()

}).listen(3000)
