var RoleModel = require("../model/roleModel")

function addRole(req, res) {

    //roleName 

    let role = new RoleModel({
        roleName: req.body.roleName
    })

    role.save(function (err, data) {
        if (err) {
            console.log("error in role add " + err);
            res.json({
                status: -1,
                msg: "Role could not added",
                data: req.body
            })
        } else {
            res.json({
                status: 200,
                msg: "Role added",
                data: role
            })
        }
    })
}


function getAllRoles(req, res) {
    RoleModel.find(function (err, data) {
        if (err) {
            console.log("error in get all role " + err);
            res.json({
                status: -1,
                msg: "Role could not reterived...",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "Role Reterived...",
                data: data
            })
        }
    })
}

function getRoleById(req, res) {
    //console.log(req.body);
    //console.log(req.params);
    //console.log(req.query);

    RoleModel.findById({ _id: req.params.roleId }, function (err, data) {
        if (err) {
            console.log("error in get role by id" + err);
            res.json({
                status: -1,
                msg: "Role could not reterived...",
                data: err
            })
        } else {
            if (data == null) {
                res.json({
                    status: 200,
                    msg: "Invalid roleId",
                    data: req.params.roleId
                })
            } else {
                res.json({
                    status: 200,
                    msg: "Role Reterived...",
                    data: data
                })
            }

        }
    })

}


function deleteByRoleId(req, res) {
    RoleModel.findByIdAndDelete({ _id: req.params.roleId }, function (err, data) {
        if (err) {
            console.log("error in delete role by id" + err);
            res.json({
                status: -1,
                msg: "Role could not deleted...",
                data: err
            })
        } else {
            if (data == null) {
                res.json({
                    status: 200,
                    msg: "Invalid roleId",
                    data: req.params.roleId
                })
            } else {
                res.json({
                    status: 200,
                    msg: "Role deleted...",
                    data: data
                })
            }

        }
    })
}


function updatRole(req, res) {
    RoleModel.findByIdAndUpdate({ _id: req.body.roleId }, { roleName: req.body.roleName}, function (err, data) {
        if (err) {
            console.log("error in update role " + err);
            res.json({
                status: -1,
                msg: "Role could not updated...",
                data: err
            })
        } else {
            if (data == null) {
                res.json({
                    status: 200,
                    msg: "Invalid roleId",
                    data: req.body.roleId
                })
            } else {
                res.json({
                    status: 200,
                    msg: "Role Updated...",
                    data: req.body
                })
            }

        }
    })

}


module.exports.addRole = addRole
module.exports.getAllRoles = getAllRoles
module.exports.getRoleById = getRoleById
module.exports.deleteByRoleId = deleteByRoleId
module.exports.updatRole = updatRole