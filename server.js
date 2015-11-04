var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Model = require('./models/app.schema.js')
//var Model2 = require('./models/member.schema.js')

mongoose.connect('mongodb://localhost/db')
var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))



app.use('/', require('./routes/api.js'))
app.use('/', require('./routes/member.api.js'))

app.delete('/api/iot/:id', function (req, res) {
  Model.findById(req.params.id, function (err, Model) {
    Model.remove(function (err) {
      if (!err) {
        console.log('removed')
        return res.send('')
      } else {
        console.log(err)
      }
    })
  })
})

app.listen(3000)
console.log('run in 3000')