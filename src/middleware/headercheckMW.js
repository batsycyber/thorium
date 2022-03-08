const headerCheck= function (req, res, next){
    let header= req.headers
    if (header["isfreeappuser"]){
        next();
    }
    else {res.send("The request is missing a mandatory isFreeAppUser header. Please check")}
}

module.exports.headerCheck= headerCheck