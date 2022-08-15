var express = require("express")
const mongoose = require('mongoose');

var sessionController = require("./controller/sessionController")

var app = express()

//middle 
app.use(express.json())//json 
app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.end("Welcome");
})


// app.get("/login",function(req,res){
//     res.end("login");      
// })

// app.get("/signup",function(req,res){
//     res.end("signup");
// })

app.post("/login",sessionController.login)
app.post("/signup",sessionController.signup)

//sync 
//simple 
//js -> sync , callback 
let x = app.listen(9898,function(){
    console.log("server started on 9898 ");
}) // function -> server -> 9898 
 
let dbUrl = "mongodb://localhost:27017/ism2022"

mongoose.connect(dbUrl,function(err){
    if(err){
        console.log("db not connected");
    }else{
        console.log("db connected...");
    }
})

