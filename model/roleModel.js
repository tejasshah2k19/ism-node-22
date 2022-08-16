var mongoose = require("mongoose")

var RoleSchema = new mongoose.Schema({
    roleName:{
        type:String,
        required:true
    }
})

module.exports  =  mongoose.model("Role",RoleSchema)