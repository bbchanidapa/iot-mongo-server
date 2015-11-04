var restful = require('node-restful')
var mongoose = restful.mongoose

var member = new mongoose.Schema({
   username : String ,
   password : String ,
   name : String ,
   lastname : String 

 
})

module.exports = restful.model('member',member)