// fs :- used for playing with files 
// create
// read
// update
// delete

const fs = require('fs');

// create file
// let content = "created using the node js"
// console.log("before creating file");
// fs.writeFile("first.txt",content,(err) =>{
//     console.log("created")
// })
// function create(){
// const data = fs.writeFileSync("first.txt",content)
// }

// create()
// console.log("after creating file")

// read
// fs.readFile("first.txt",(err,data) =>{
//     console.log(data.toString())
// })

// update
// fs.appendFile('first.txt'," append using the node js fs module",(err) =>{
//     console.log('appended');
// })

// delete

fs.unlink("first.txt",(err) =>{
    console.log("deleted");
})