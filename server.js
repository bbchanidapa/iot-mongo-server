var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db')

var app = express()


app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use('/',require('./routes/api'))




app.listen(3000)
console.log('run in 3000')