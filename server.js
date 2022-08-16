var express = require("express")
const mongoose = require('mongoose');

var sessionController = require("./controller/sessionController")
const roleController = require("./controller/roleController")


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



//role 
app.post("/role",roleController.addRole)
app.get("/role",roleController.getAllRoles)
app.get("/role/:roleId",roleController.getRoleById)
app.delete("/role/:roleId",roleController.deleteByRoleId)
app.put("/role",roleController.updatRole)

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

