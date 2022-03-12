const axios = require('axios')

let createMeme = async function(req, res){

try{
    let memeId = req.query.template_id
    let upperText = req.query.text0
    let lowerText = req.query.text1
    let userName = req.query.username
    let passWord = req.query.password

    if(memeId && upperText && lowerText && userName && passWord){
    let options = {
        method : "POST",
        url : `https://api.imgflip.com/caption_image?template_id={memeId}&text0={upperText}&text1={lowerText}&username={userName}&password={passWord}`
    }
    let result = await axios(options)
    res.status(200).send({status: true, msg: result.data})}
}catch(error){
    res.status(500).send({error: error.message})
}
}
module.exports.createMeme = createMeme