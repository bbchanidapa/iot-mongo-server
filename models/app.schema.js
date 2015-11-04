var restful = require('node-restful')
var mongoose = restful.mongoose

var iot = new mongoose.Schema({

    iot_id : String ,
    temperature : String ,
    timestamp : String ,
    relative_humidty : String 

})

module.exports = restful.model('iot',iot)