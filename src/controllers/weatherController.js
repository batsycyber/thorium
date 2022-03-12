const axios = require('axios')

let getWeather = async function(req,res){
    try{
        let city = req.query.q
        let key = req.query.appid
        if(city && key){
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true, msg: result.data})
    }else{
        res.status(400).send({status: false, msg: "check city or key"})
    }

    }catch (error){
        res.status(500).send({error: error.message})
    }
}


// for london temp

let tempOfLondonCity = async function(req,res){
    try{
        let city = "London"
        let key = req.query.appid
        if( key){
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true, temprature: result.data.main.temp})
    }else{
        res.status(400).send({status: false, msg: " provide valid city and  key"})
    }

    }catch (error){
        res.status(500).send({error: error.message})
    }
}


// get temprature of multiple cities

let tempSevenCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let key = req.query.appid
        if(key){

            let temp = []
            let temp1 = []
            for(let i=0; i<cities.length; i++){
                
                let options = {
                    method : "GET",
                    url : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`
                }
                let result = await axios (options)
                let tempSevenCity = result.data.main.temp
                temp.push([cities[i] , tempSevenCity] )
                temp1.push(tempSevenCity)
            
            }
            // console.log(temp)
            let sortIncreasingTemp = temp.sort((a,b) => (a[1]- b[1]))
            console.log(sortIncreasingTemp)
           
            let array = []
            for (let j = 0; j < sortIncreasingTemp.length; j++) {
                const element = sortIncreasingTemp[j];
                let obj = {}
                obj["city"] = element[0]
                obj["temp"] = element[1]
                array.push(obj)
            }
                        
            res.status(200).send({status: true, msg: array})
        }else{
            res.status(400).send({status: false, msg: "wrong key or wrong city"})
        }

    }catch(error){
        res.status(500).send({error : error.message})
    }
}

module.exports.tempSevenCities = tempSevenCities
module.exports.tempOfLondonCity = tempOfLondonCity

module.exports.getWeather = getWeather