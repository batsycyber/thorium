const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const getIpAddress= async function (req, res, next) {
    console.log("get ip address and time")
}
 module.exports.getIpAddress= getIpAddress
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData