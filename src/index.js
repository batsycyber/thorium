const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
let moment = require("moment")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware

const middleware =function(req,res,next){
    const time =moment().format('YYYY-MM-DD, h:mm:ss a');
    const type =req.originalUrl
    const ip = req.ip;
    console.log(time,ip,type)}
    app.use(middleware)

mongoose.connect("mongodb+srv://taabish:lkmgsyjhwbQYgkvX@cluster0.cp3ka.mongodb.net/mohsinali8979?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);
// const middleware = function(req,res,next){
//     console.log("middleware is done");
//     next()
// }
// app.use(middleware);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
