var UserModel = require("../model/userModel")

//signup
module.exports.addUser = function (req, res) {
    // let user = new UserModel(req.body)

    let user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: "62fb17d12c428163ac4baf04"
    })

    user.save(function (err, data) {
        if (err) {
            res.json({
                status: -1,
                msg: "SMW",
                data: req.body
            })
        } else {
            res.json({
                status: 200,
                msg: "User added",
                data: user
            })
        }
    })
}

module.exports.getAllUser = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({
                status: -1, msg: "SMW", data: err
            })
        } else {
            res.json({ status: 200, msg: "USER RET", data: data })
        }
    })
}