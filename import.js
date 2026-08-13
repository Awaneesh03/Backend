// // // // // // import fs from 'fs'
// // // // // // fs.writeFileSync("index.html","hehehhehe")
// // // // // // let data = fs.readFileSync("index.html")
// // // // // // console.log(data.toString(),"heheheheh")
// // // // // const fs = require("fs")
// // // // // console.log("1")
// // // // // fs.writeFile("home.txt","hehehehe",()=>{
// // // // //     console.log("yayaya")
// // // // // })
// // // // // console.log("2")
// // // // // console.log("3")
// // // // // fs.unlink("home.txt",()=>{
// // // // //     console.log("deleted")
// // // // // })
// // // // const fs = require("fs")
// // // // console.log("1")
// // // // fs.mkdir("home",()=>{
// // // //     console.log("yayaya")
// // // // })

// // // // fs.writeFileSync("folder/home.txt","hehehehe")
// // // // let data = fs.readFileSync("folder/home.txt")
// // // // console.log(data.toString(),"heheheheh")
// // // const fs = require("fs")
// // // console.log("1")
// // // fs.writeFileSync("folder/home.txt","hehehehe")
// // // fs.appendFileSync("folder/home.txt","hahahah")
// // // let data = fs.readFileSync("folder/home.txt")
// // // console.log(data.toString(),"heheheheh")
// // // fs.unlink("folder/home.txt",()=>{
// // //     console.log("deleted")
// // // })  
// // let os = require("os")
// // console.log(os.arch()/1024/1024/1024)
// // console.log(os.totalmem()/1024/1024/1024)
// // console.log(os.hostname())
// // console.log(os.type())
// // console.log(os.freemem()/1024/1024/1024)
// // console.log(os.uptime()/3600)

// let http = require("http")
// let server = http.createServer((req,res)=>{
//     // res.write("hello world")
//     // res.end()
//     if(req.url=="/"){
//         res.write("hello world")
//         res.end()
//     }
//     else if(req.url=="/about"){
//         res.write("about page")
//         res.end()
//     }
//     else{
//         res.write("404 page not found")
//         res.end()
//     }
// })
// server.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })
let express = require("express")
let app = express()
app.use((req,res,next)=>{
    console.log("ayyayayayay")
    next()
})
app.use((req,res,next)=>{
    console.log("nahi jane dunga")
    next()
})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.post("/",(req,res)=>{
    res.send("hello post")
})  
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})